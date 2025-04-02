package com.projectManagement.projectManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "chat",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Message> messages;

    @ManyToMany
    private List<User> users = new ArrayList<>();

    @OneToOne
    private Project project;

    public Chat() {
    }

    public Chat(Long id, String name, List<Message> messages, List<User> users, Project project) {
        this.id = id;
        this.name = name;
        this.messages = messages;
        this.users = users;
        this.project = project;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
