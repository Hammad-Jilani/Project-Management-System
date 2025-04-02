package com.projectManagement.projectManagementSystem.Service;

import com.projectManagement.projectManagementSystem.Repositories.CommentRepository;
import com.projectManagement.projectManagementSystem.Repositories.IssueRepository;
import com.projectManagement.projectManagementSystem.Repositories.UserRepository;
import com.projectManagement.projectManagementSystem.model.Comment;
import com.projectManagement.projectManagementSystem.model.Issues;
import com.projectManagement.projectManagementSystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Comment createComment(Long issueId, Long userId, String content) throws Exception {
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Issues> issuesOptional = issueRepository.findById(issueId);
        if (issuesOptional.isEmpty()){
            throw new Exception("Issue not found with id "+issueId);
        }
        if (userOptional.isEmpty()){
            throw new Exception("User not found with id "+userId);

        }
        Issues issues = issuesOptional.get();
        User user  = userOptional.get();

        Comment comment1 = new Comment();

        comment1.setIssue(issues);
        comment1.setUser(user);
        comment1.setCreateDateTime(LocalDateTime.now());
        comment1.setContent(content);

        Comment savedComment = commentRepository.save(comment1);

        issues.getComments().add(savedComment);

        return savedComment;
    }

    @Override
    public void deleteComment(Long commentId, Long userId) throws Exception {
        Optional<Comment> commentOptional = commentRepository.findById(commentId);
        Optional<User> userOptional = userRepository.findById(userId);

        if (commentOptional.isEmpty()){
            throw new Exception("Comment not found with id "+commentId);
        }

        if (userOptional.isEmpty()){
            throw new Exception("User not found with id "+userId);
        }

        Comment comment = commentOptional.get();
        User user = userOptional.get();

        if (comment.getUser().equals(user)){
            commentRepository.delete(comment);
        }else{
            throw new Exception("User does not have permission to delete this comment");
        }

    }

    @Override
    public List<Comment> findCommentByIssueId(Long issueId) {
        return commentRepository.findByIssueId(issueId);
    }
}
