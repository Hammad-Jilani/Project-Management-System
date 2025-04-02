package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.Repositories.ProjectRepository;
import com.projectManagement.projectManagementSystem.model.Chat;
import com.projectManagement.projectManagementSystem.model.Project;
import com.projectManagement.projectManagementSystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class ProjectServiceImp implements ProjectService{

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ChatServiceImpl chatService;

    @Override
    public Project createProject(Project project, User user) throws Exception {
        Project createProject  = new Project();

        createProject.setOwner(user);
        createProject.setTag(project.getTag());
        createProject.setName(project.getName());
        createProject.setCategory(project.getCategory());
        createProject.setDescription(project.getDescription());
        createProject.getTeam().add(user);

        Project saveProject = projectRepository.save(createProject);

        Chat chat = new Chat();
        chat.setProject(saveProject);

        Chat projectChat = chatService.createChat(chat);
        saveProject.setChat(projectChat);

        return saveProject;
    }

    @Override
    public List<Project> getProjectByTeam(User user, String category, String tag) throws Exception {
        List<Project> projects = projectRepository.findByTeamContainingOrOwner(user,user);

        if(category != null){
            projects = projects.stream().filter(project -> project.getCategory().equals(category))
                    .collect(Collectors.toList());

        }
        if (tag != null){
            projects = projects.stream().filter(project -> project.getTag().contains(tag))
                    .collect(Collectors.toList());
        }
        return projects;
    }

    @Override
    public Project getProjectById(Long projectId) throws Exception {
        Optional<Project> optionalProject = projectRepository.findById(projectId);
        if (optionalProject.isEmpty()){
            throw new Exception("Project Not Found");
        }
        return optionalProject.get();
    }

    @Override
    public void deleteProject(Long projectId, Long userId) throws Exception {
        getProjectById(projectId);
        projectRepository.deleteById(projectId);
    }

    @Override
    public Project updateProject(Project updatedProject, Long id) throws Exception {
        Project project = getProjectById(id);

        project.setName(updatedProject.getName());
        project.setDescription(updatedProject.getDescription());
        project.setTag(updatedProject.getTag());

        return projectRepository.save(project);
    }

    @Override
    public void addUserToProject(Long projectId, Long userId) throws Exception {
        Project project = getProjectById(projectId);
        User user = userService.findUserById(userId);
        if (!project.getTeam().contains(user)){
            project.getChat().getUsers().add(user);
            project.getTeam().add(user);
        }
        projectRepository.save(project);
    }

    @Override
    public void removeUserFromProject(Long projectId, Long userId) throws Exception {
        Project project = getProjectById(projectId);
        User user = userService.findUserById(userId);
        if (project.getTeam().contains(user)){
            project.getChat().getUsers().remove(user);
            project.getTeam().remove(user);
        }
        projectRepository.save(project);
    }

    @Override
    public Chat getChatByProjectId(Long projectId) throws Exception {
        Project project = getProjectById(projectId);
        return project.getChat();
    }

    @Override
    public List<Project> searchProjects(String keyword, User user) throws Exception {
        return  projectRepository.findByNameContainingAndTeamContains(keyword,user);
    }


}
