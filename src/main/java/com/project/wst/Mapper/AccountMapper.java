package com.project.wst.Mapper;

import com.project.wst.Model.Account;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AccountMapper {
    public List<Account> saveAccount(Account account);
}
