package com.project.wst.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Entity
@Getter
@Setter
public class Account {
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_code_seq")
    private Integer userCode;

    private String userId;
    private String userName;
    private String password;
    private String email;
    private String role;
    private LocalDateTime joinDate;
    private LocalDateTime updateDate;
    private String userStatus;


}
