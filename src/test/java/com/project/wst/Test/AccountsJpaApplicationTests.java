 package com.project.wst.Test;

import com.project.wst.Model.Accounts;
import com.project.wst.Repository.AccountsRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDateTime;
import java.util.List;

 @DataJpaTest
 @Slf4j
 public class AccountsJpaApplicationTests {
    @Autowired
    AccountsRepository accountsRepository;

    @BeforeEach
    void insertTestData() {
        Accounts accounts = new Accounts();
        accounts.setUserId("ncallcaid");
        accounts.setUserName("김철수");
        accounts.setPassword("999");
        accounts.setEmail("w9283@nate.com");
        accounts.setRole("10");
        accounts.setJoinDate(LocalDateTime.now());
        accounts.setUserStatus("ON");
        accountsRepository.save(accounts);
    }

     @Test
     void findAllTest() { // 저장된 데이터 모두를 Spring JPA에 미리 구현된 findAll 명령을 통해 불러온다
         List<Accounts> accounts = accountsRepository.findAll();
         for(Accounts u : accounts) log.info("[FindAll]: " + u.getUserCode() + " | " +u.getUserName());
     }

     @Test
     void find2ByNameTest() { // Like 검색으로 2개만 값을 가져오는 내가 작성한 명령을 실행해본다
         List<Accounts> accounts = accountsRepository.findUserListByUserCode(1);
         for(Accounts u : accounts) log.info("[FindSome]: "  + u.getUserCode() + " | " +u.getUserName());
     }



}
