package com.project.wst.ClassDefine;

import jakarta.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) //이를 통해 기본 생성자는 외부에서 직접 호출될 수 없고, 서브 클래스나 같은 패키지 내에서만 호출 가능합니다
@Embeddable
public class Password {
    private static final PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    private String encodedPassword;

    public Password(final String rawPassword) {
        this.encodedPassword = encodePassword(rawPassword);
    }



    private String encodePassword(final String rawPassword) {
        return passwordEncoder.encode(rawPassword);
    }

    //changePassword 메서드를 사용해 현재 비밀번호가 일치하는 경우 새로운 비밀번호로 변경할 수 있습니다.
    public void changePassword(final String oldRawPassword, final String newRawPassword) {
        if (isMatches(oldRawPassword)) {
            this.encodedPassword = encodePassword(newRawPassword);
        }
    }

    //isMatches 메서드를 통해 입력된 평문 비밀번호와 인코딩된 비밀번호가 일치하는지 확인할 수 있습니다.
    public boolean isMatches(String rawPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
