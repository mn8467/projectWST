package com.project.wst.Service;

import com.project.wst.Mapper.CommonMapper;
import com.project.wst.Model.Common;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CommonService {

    @Autowired
    private CommonMapper commonMapper;

    public List<Common> getCode(Common common) {  //Common 테이블의 전체 코드를 가져와서 Major코드만 남기는 SQL 작성
        return commonMapper.getCode(common);
    }

    public List<Common> getTypeCode(Common common){
        return commonMapper.getTypeCode(common);
    }
    public List<Common> getMajorCode(Common common){
        return commonMapper.getMajorCode(common);
    }
    public List<Common> getSubCode(Common common){
        return commonMapper.getSubCode(common);
    }
    public List<Common> getDetailCode(Common common){
        return commonMapper.getDetailCode(common);
    }

}
