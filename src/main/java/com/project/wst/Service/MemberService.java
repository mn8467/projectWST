package com.project.wst.Service;

import com.project.wst.Mapper.MemberMapper;
import com.project.wst.Model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    @Autowired
    private MemberMapper memberMapperMapper;

    public void addAccount(Member member){
        memberMapperMapper.saveAccount(member);
    }
}
