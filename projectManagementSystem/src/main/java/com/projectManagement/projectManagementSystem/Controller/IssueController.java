package com.projectManagement.projectManagementSystem.Controller;

import com.projectManagement.projectManagementSystem.Dto.IssueDto;
import com.projectManagement.projectManagementSystem.Service.IssueService;
import com.projectManagement.projectManagementSystem.Service.UserService;
import com.projectManagement.projectManagementSystem.model.Issues;
import com.projectManagement.projectManagementSystem.model.User;
import com.projectManagement.projectManagementSystem.request.IssueRequest;
import com.projectManagement.projectManagementSystem.response.AuthResponse;
import com.projectManagement.projectManagementSystem.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @Autowired
    private UserService userService;

    @GetMapping("/{issueId}")
    private ResponseEntity<Issues> getIssueById(@PathVariable Long issueId) throws Exception{
        return ResponseEntity.ok(issueService.getIssueById(issueId));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issues>> getIssueByProjectId(@PathVariable Long projectId){
        return ResponseEntity.ok(issueService.getIssueByProjectId(projectId));
    }

    @PostMapping
    public ResponseEntity<IssueDto> createIssue(@RequestBody IssueRequest issue,
                                                @RequestHeader("Authorization") String jwt)
            throws Exception {

        User tokenUser = userService.findUserProfileByJwt(jwt);
        User user = userService.findUserById(tokenUser.getId());

        Issues createIssue = issueService.createIssue(issue,tokenUser);
        IssueDto issueDto = new IssueDto();
        issueDto.setDescription(createIssue.getDescription());
        issueDto.setDueDate(createIssue.getDueDate());
        issueDto.setId(createIssue.getId());
        issueDto.setPriority(createIssue.getPriority());
        issueDto.setProject(createIssue.getProject());
        issueDto.setProjectId(createIssue.getProjectId());
        issueDto.setStatus(createIssue.getStatus());
        issueDto.setTitle(createIssue.getTitle());
        issueDto.setTags(createIssue.getTags());
        issueDto.setAssignee(createIssue.getAssignee());

        return ResponseEntity.ok(issueDto);
    }

    @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteUser(@PathVariable Long issueId,
                                                   @RequestHeader("Authorization") String jwt)
    throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        issueService.deleteIssue(issueId,user.getId());

        MessageResponse res = new MessageResponse();
        res.setMessage("Issue Deleted");
        return ResponseEntity.ok(res);
    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issues> addUserToIssue(@PathVariable Long issueId,@PathVariable Long userId)
    throws Exception
    {
        Issues issues = issueService.addUserToIssue(issueId,userId);
        return ResponseEntity.ok(issues);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issues> updateIssueStatus(@PathVariable String status,@PathVariable
                                                    Long issueId) throws Exception {
        Issues issues = issueService.updateStatus(issueId,status);
        return ResponseEntity.ok(issues);
    }
}
