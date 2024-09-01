package com.project.wst.Repository;

import com.project.wst.Model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface MemberRepository extends JpaRepository<Member, Long> {


//이메일과 userId는 중복되지 않기 때문에 해당 값이 존재하는지 여부를 체크하기 위해 메서드를 추가했다.

/*    boolean existsByEmail(String email);
    boolean existsByUserId(String userId);
*/

}