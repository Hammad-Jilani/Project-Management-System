package com.projectManagement.projectManagementSystem.Controller;

import com.projectManagement.projectManagementSystem.Repositories.InviteRequest;
import com.projectManagement.projectManagementSystem.Service.InvitationService;
import com.projectManagement.projectManagementSystem.Service.ProjectService;
import com.projectManagement.projectManagementSystem.Service.UserService;
import com.projectManagement.projectManagementSystem.model.*;
import com.projectManagement.projectManagementSystem.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private InvitationService invitationService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @GetMapping
    private ResponseEntity<List<Project>> getProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String tag,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        List<Project> projects = projectService.getProjectByTeam(user,category,tag);

        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/{projectId}")
    private ResponseEntity<Project> getProjectById(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Project projects = projectService.getProjectById(projectId);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Project> createProject(
            @RequestHeader("Authorization") String jwt,
            @RequestBody Project project
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Project createdProject = projectService.createProject(project,user);
        return new ResponseEntity<>(createdProject, HttpStatus.OK);
    }

    @PatchMapping("/{projectId}")
    private ResponseEntity<Project> updateProject(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String jwt,
            @RequestBody Project project
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Project updatedProject = projectService.updateProject(project,projectId);
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    private ResponseEntity<MessageResponse> deleteProject(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        projectService.deleteProject(projectId,user.getId());
        return new ResponseEntity<>(new MessageResponse("Project deleted Successfully"), HttpStatus.OK);
    }

    @GetMapping("/search")
    private ResponseEntity<List<Project>> searchProjects(
            @RequestParam(required = false) String keyword,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        List<Project> projects = projectService.searchProjects(keyword,user);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/{projectId}/chat")
    private ResponseEntity<Chat> getChatByProjectId(
            @PathVariable Long projectId,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Chat chat = projectService.getChatByProjectId(projectId);
        return new ResponseEntity<>(chat, HttpStatus.OK);
    }

    @PostMapping("/invite")
    private ResponseEntity<MessageResponse> inviteProjects(
            @RequestHeader("Authorization") String jwt,
            @RequestBody InviteRequest req,
            @RequestBody Project project
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        invitationService.sendInvitation(req.getEmail(),req.getProjectId());
        MessageResponse res = new MessageResponse("User invitation send");
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/accept_invitation")
    private ResponseEntity<Invitation> acceptInviteProjects(
            @RequestHeader("Authorization") String jwt,
            @RequestParam String token,
            @RequestBody Project project
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Invitation invitation =  invitationService.acceptInvitation(token, user.getId());
        projectService.addUserToProject(invitation.getProjectId(),user.getId());

        return new ResponseEntity<>(invitation, HttpStatus.ACCEPTED);
    }
}
