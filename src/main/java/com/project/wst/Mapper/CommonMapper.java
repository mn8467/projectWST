package com.project.wst.Mapper;

import com.project.wst.Model.Common;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommonMapper {
    public List<Common> getCode(Common common); //전체 코드를 가져온다
    public List<Common> getTypeCode(Common common);
    public List<Common> getMajorCode(Common common);
    public List<Common> getSubCode(Common common);
    public List<Common> getDetailCode(Common common);

}
