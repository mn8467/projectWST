package com.project.wst.Mapper;

import com.project.wst.Model.Common;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Mapper
public interface CommonMapper {
    public List<Common> getCode(Common common); //전체 코드를 가져온다
    public List<Common> getTypeCode(Common common);
    public List<Common> getMajorCode(Common common);
    public Map<String,String> getSubCode(@Param("majorCode") String majorCode);

    public List<Common> getDetailCode(Common common);
    public List<Common> inputMajorCode(Common common);

}
