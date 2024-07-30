package com.project.wst.Mapper;

import com.project.wst.Model.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    void saveAccount(Member member);
}
