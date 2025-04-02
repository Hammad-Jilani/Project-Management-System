package com.projectManagement.projectManagementSystem.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String content;
    private LocalDateTime createDateTime;

    @ManyToOne
    private User user;

    @ManyToOne
    private Issues issue;

    public Comment() {
    }

    public Comment(Long id, String content, LocalDateTime createDateTime, User user, Issues issue) {
        this.id = id;
        this.content = content;
        this.createDateTime = createDateTime;
        this.user = user;
        this.issue = issue;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(LocalDateTime createDateTime) {
        this.createDateTime = createDateTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Issues getIssue() {
        return issue;
    }

    public void setIssue(Issues issue) {
        this.issue = issue;
    }
}
