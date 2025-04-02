package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.model.Issues;
import com.projectManagement.projectManagementSystem.model.User;
import com.projectManagement.projectManagementSystem.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {

    Issues getIssueById(Long issueId) throws Exception;

    List<Issues> getIssueByProjectId(Long projectId);

    Issues createIssue(IssueRequest issue, User userId) throws Exception;

    void deleteIssue(Long issueId,Long userId) throws Exception;

    Issues addUserToIssue(Long issueId,Long userId) throws Exception;

    Issues updateStatus(Long issueId, String status) throws Exception;

}
