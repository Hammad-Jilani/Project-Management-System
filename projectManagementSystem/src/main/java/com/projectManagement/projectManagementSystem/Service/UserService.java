package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.model.User;

public interface UserService {
    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String Email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUsersProjectSize(User user, int number);

}
