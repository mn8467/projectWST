package com.project.wst.DTO;

import com.project.wst.ClassDefine.Password;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@AllArgsConstructor
public class MemberSignupRequest {
    //API 의 request parameter 의 null 체크를 위해 사용하는 어노테이션이다, validation 강도가 높고, null 과 "" 과 " " 모두 허용하지 않습니다.
    @NotBlank
    private String userId;

    @NotBlank
    private String userName;

    @NotBlank
    private String password;

    @Email
    private String email;
}
