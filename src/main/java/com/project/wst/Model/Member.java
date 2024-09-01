package com.project.wst.Model;

import com.project.wst.ClassDefine.Password;
import com.project.wst.ClassDefine.Role;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userCode;

    @Column(unique = true, nullable = false, updatable = false)
    private String userId;

    @Column(nullable = false)
    private String userName;

    @AttributeOverride(name = "rawPassword", column = @Column(name = "password", nullable = false))
    @Embedded
    private Password password;

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    private LocalDateTime joinDate;
    private LocalDateTime updateDate;
    private String userStatus;

    @Builder
    //아이디, 이름, 비밀번호, 이메일 , role
    public Member (String userId, String userName, Password password,String email,Role role){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}
