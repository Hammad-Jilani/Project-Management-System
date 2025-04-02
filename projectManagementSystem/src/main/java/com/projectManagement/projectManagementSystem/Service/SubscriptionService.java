package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.model.PlanType;
import com.projectManagement.projectManagementSystem.model.Subscription;
import com.projectManagement.projectManagementSystem.model.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId);
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);
}
