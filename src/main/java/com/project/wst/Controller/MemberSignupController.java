package com.project.wst.Controller;

import com.project.wst.DTO.MemberSignupRequest;
import com.project.wst.DTO.MemberSignupResponse;
import com.project.wst.Service.MemberSignupService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController("/member")
public class MemberSignupController {

    private final MemberSignupService memberSignupService;

    @PostMapping("/sign-up")
    public ResponseEntity<MemberSignupResponse> signup(
            @RequestBody @Valid MemberSignupRequest request) {
        MemberSignupResponse response = memberSignupService.signup(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
