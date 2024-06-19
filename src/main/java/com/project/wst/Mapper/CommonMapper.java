package com.project.wst.Mapper;

import com.project.wst.Model.Common;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommonMapper {
    List<Common> getCode(); //전체 코드를 가져온다
}
