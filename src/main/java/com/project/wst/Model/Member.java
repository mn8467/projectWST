package com.project.wst.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Data
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userCode;

    @Column(unique = true, nullable = false, updatable = false)
    private String userId;

    private String userName;

    @AttributeOverride(name = "rawPassword", column = @Column(name = "password", nullable = false))
    @Embedded
    private String password;

    private String email;
    private String role;
    private LocalDateTime joinDate;
    private LocalDateTime updateDate;
    private String userStatus;

}
