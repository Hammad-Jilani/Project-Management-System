package com.projectManagement.projectManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "project_id")
    private Long projectId;

    private String name;
    private String description;
    private String category;

    @ElementCollection
    private List<String> tag = new ArrayList<>();

    @JsonIgnore
    @OneToOne(mappedBy = "project", cascade = CascadeType.ALL,orphanRemoval = true)
    private Chat chat;

    @ManyToOne
    private User owner;

    @OneToMany(mappedBy = "project",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Issues> issues = new ArrayList<>();

    @ManyToMany
    private List<User> team = new ArrayList<>();

    public Project() {
    }

    public Project(Long id, String name, String description, String category, List<String> tag, Chat chat, User owner, List<Issues> issues, List<User> team) {
        this.projectId = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.tag = tag;
        this.chat = chat;
        this.owner = owner;
        this.issues = issues;
        this.team = team;
    }

    public Long getId() {
        return projectId;
    }

    public void setId(Long id) {
        this.projectId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<String> getTag() {
        return tag;
    }

    public void setTag(List<String> tag) {
        this.tag = tag;
    }

    public Chat getChat() {
        return chat;
    }

    public void setChat(Chat chat) {
        this.chat = chat;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public List<Issues> getIssues() {
        return issues;
    }

    public void setIssues(List<Issues> issues) {
        this.issues = issues;
    }

    public List<User> getTeam() {
        return team;
    }

    public void setTeam(List<User> team) {
        this.team = team;
    }
}
