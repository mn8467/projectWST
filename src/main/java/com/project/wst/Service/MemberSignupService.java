package com.project.wst.Service;

import com.project.wst.ClassDefine.Password;
import com.project.wst.ClassDefine.Role;
import com.project.wst.Repository.MemberRepository;
import com.project.wst.DTO.MemberSignupRequest;
import com.project.wst.DTO.MemberSignupResponse;
import com.project.wst.Model.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberSignupService {

    private final MemberRepository memberRepository;

    @Transactional
    public MemberSignupResponse signup(MemberSignupRequest request) {
       /* if (memberRepository.existsByEmail(request.getEmail())) {
            throw new EmailDuplicateException(request.getEmail());
        }

        if (memberRepository.existsByUserId(request.getUserId())) {
            throw new NicknameDuplicateException(request.getUserId());
        }
         */

        Member member = Member.builder()
                .email(request.getEmail())
                .userName(request.getUserName())
                .userId(request.getUserId())
                .password(new Password(request.getPassword()))
                .role(Role.USER)
                .build();

        memberRepository.save(member);

        return MemberSignupResponse.from(member);
    }
}
