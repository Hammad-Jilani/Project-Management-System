package com.projectManagement.projectManagementSystem.response;


//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class MessageResponse {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public MessageResponse() {
    }

    public MessageResponse(String message) {
        this.message = message;
    }
}
