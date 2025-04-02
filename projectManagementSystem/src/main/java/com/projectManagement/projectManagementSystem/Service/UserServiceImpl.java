package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.Repositories.UserRepository;
import com.projectManagement.projectManagementSystem.config.JwtProvider;
import com.projectManagement.projectManagementSystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserProfileByJwt(String jwt) throws Exception {
        String email = JwtProvider.getEmailFromToken(jwt);
        return findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String Email) throws Exception {
        Optional<User> user = userRepository.findByEmail(Email);
        if (user.isEmpty()){
            throw new Exception("User not found with email "+Email);
        }
        return user.get();
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()){
            throw new Exception("User not found with userId "+userId);
        }
        return user.get();
    }

    @Override
    public User updateUsersProjectSize(User user, int number) {
        user.setProjectSize(user.getProjectSize()+number);

        return userRepository.save(user);
    }
}
