package com.projectManagement.projectManagementSystem.Controller;

import com.projectManagement.projectManagementSystem.Service.MessageService;
import com.projectManagement.projectManagementSystem.Service.ProjectService;
import com.projectManagement.projectManagementSystem.Service.UserService;
import com.projectManagement.projectManagementSystem.model.Chat;
import com.projectManagement.projectManagementSystem.model.Message;
import com.projectManagement.projectManagementSystem.model.User;
import com.projectManagement.projectManagementSystem.request.CreateMessageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request) throws Exception {
        User user = userService.findUserById(request.getSenderId());
//        if (user==null) throw new Exception("User not found with id "+request.getSenderId());
        Chat chat= projectService.getProjectById(request.getProjectId()).getChat();
        if (chat==null) throw new Exception("Chat not found");
        Message sendMessage =  messageService.sendMessage(request.getSenderId(),request.getProjectId(),request.getContent());
        return ResponseEntity.ok(sendMessage);

    }
    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId) throws Exception {
        List<Message> messages = messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }
}
