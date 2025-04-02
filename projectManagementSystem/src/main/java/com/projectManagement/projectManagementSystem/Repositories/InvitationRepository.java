package com.projectManagement.projectManagementSystem.Repositories;

import com.projectManagement.projectManagementSystem.Service.InvitationService;
import com.projectManagement.projectManagementSystem.model.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvitationRepository extends JpaRepository<Invitation,Long> {
    Invitation findByToken(String token);
    Invitation findByEmail(String userEmail);
}
