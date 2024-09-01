package com.project.wst.DTO;

import com.project.wst.Model.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class MemberSignupResponse {
    private String email;
    private String userId;

    public static MemberSignupResponse from(Member member) {
        return MemberSignupResponse.builder()
                .email(member.getEmail())
                .userId(member.getUserId())
                .build();
    }
}
