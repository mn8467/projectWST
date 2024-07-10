package com.project.wst.Controller;

import com.project.wst.Model.Account;
import com.project.wst.Model.Common;
import com.project.wst.Service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@Slf4j
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/sign-up")
    public Map<String, List<Account>> saveAccountController(Account account){
        Map<String, List<Account>> resultMap = new HashMap<>();
        List<Account> resultList =  accountService.saveAccount(account);
        resultMap.put("resultList", resultList);

        log.info("resultList : " + resultMap);
       return resultMap;
    }

}
