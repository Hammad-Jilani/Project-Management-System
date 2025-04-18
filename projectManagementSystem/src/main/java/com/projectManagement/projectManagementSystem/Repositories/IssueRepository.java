package com.projectManagement.projectManagementSystem.Repositories;

import com.projectManagement.projectManagementSystem.model.Issues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issues,Long> {
    public List<Issues> findByProjectId(Long projectId);

}
