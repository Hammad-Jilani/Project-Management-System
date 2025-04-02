package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.Repositories.ChatRepository;
import com.projectManagement.projectManagementSystem.model.Chat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService{

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}
