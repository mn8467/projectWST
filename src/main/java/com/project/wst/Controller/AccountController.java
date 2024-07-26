package com.project.wst.Controller;

import com.project.wst.Model.Account;
import com.project.wst.Model.Common;
import com.project.wst.Service.AccountService;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("/sign-up") //CREATE user
    public Map<String, String> saveAccountController(@RequestBody Account account){
        accountService.addAccount(account);
        Map<String, String> resultMap = new HashMap<>();
        resultMap.put("result", "ok"); //클라이언트에 ok를 반환

        return resultMap;
    }


}
