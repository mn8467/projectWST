package com.project.wst.Controller;

import com.project.wst.Model.Common;
import com.project.wst.Service.CommonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/codes")
@Slf4j
public class CommonController {

    @Autowired
    private CommonService commonService;

    @PostMapping(value = "/classifications", produces = "application/json; charset=UTF-8")
    public Map<String, Object> CodeController(Common common) {
        Map<String, Object> resultMap = new HashMap<>();
        List<Common> resultList = commonService.getCode(common);
        resultMap.put("resultList", resultList);
        log.info("resultList" + resultMap);

        return resultMap;
    }

    @PostMapping(value = "/trash-type", produces = "application/json; charset=UTF-8")
    public Map<String, List<Common>> MajorCodeController(Common common) {
        Map<String, List<Common>> resultMap = new HashMap<>();
        List<Common> resultList = commonService.getTypeCode(common);
        resultMap.put("resultList", resultList);
        log.info("resultList : " + resultMap);

        return resultMap;
    }

    @PostMapping(value = "/major-code", produces = "application/json; charset=UTF-8")
    public Map<String, List<Common>> GetMajorCode(Common common) {
        Map<String, List<Common>> resultMap = new HashMap<>();
        List<Common> resultList = commonService.getMajorCode(common);
        resultMap.put("resultList", resultList);
        log.info("resultList : " + resultMap);

        return resultMap;
    }
}

/*    @PostMapping("/home")
    public String receiveSelectedValue(){

    }*/


