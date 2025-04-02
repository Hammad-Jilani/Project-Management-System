package com.projectManagement.projectManagementSystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String email;

    private int projectSize;

    @JsonIgnore
    @OneToMany(mappedBy = "assignee",cascade = CascadeType.ALL)
    private List<Issues> assignedIssues = new ArrayList<>();


    public User() {
    }

    public User(Long id, String fullName, String password, String email, int projectSize, List<Issues> assignedIssues) {
        this.id = id;
        this.fullName = fullName;
        this.password = password;
        this.email = email;
        this.projectSize = projectSize;
        this.assignedIssues = assignedIssues;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getProjectSize() {
        return projectSize;
    }

    public void setProjectSize(int projectSize) {
        this.projectSize = projectSize;
    }

    public List<Issues> getAssignedIssues() {
        return assignedIssues;
    }

    public void setAssignedIssues(List<Issues> assignedIssues) {
        this.assignedIssues = assignedIssues;
    }
}
