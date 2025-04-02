package com.projectManagement.projectManagementSystem.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDate subscriptionStartDate;
    private LocalDate getSubscriptionEndDate;

    private PlanType planType;

    private boolean isValid;

    @OneToOne
    private User user;

    public Subscription() {
    }

    public Subscription(Long id, LocalDate subscriptionStartDate, LocalDate getSubscriptionEndDate, PlanType planType, boolean isValid, User user) {

        this.id = id;
        this.subscriptionStartDate = subscriptionStartDate;
        this.getSubscriptionEndDate = getSubscriptionEndDate;
        this.planType = planType;
        this.isValid = isValid;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getSubscriptionStartDate() {
        return subscriptionStartDate;
    }

    public void setSubscriptionStartDate(LocalDate subscriptionStartDate) {
        this.subscriptionStartDate = subscriptionStartDate;
    }

    public LocalDate getGetSubscriptionEndDate() {
        return getSubscriptionEndDate;
    }

    public void setGetSubscriptionEndDate(LocalDate getSubscriptionEndDate) {
        this.getSubscriptionEndDate = getSubscriptionEndDate;
    }

    public PlanType getPlanType() {
        return planType;
    }

    public void setPlanType(PlanType planType) {
        this.planType = planType;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
