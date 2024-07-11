package com.project.wst.Service;

import com.project.wst.Mapper.AccountMapper;
import com.project.wst.Model.Account;
import com.project.wst.Model.Common;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountMapper accountMapper;

    public void addAccount(Account account){
        accountMapper.saveAccount(account);
    }
}
