package com.project.wst.Controller;

import ch.qos.logback.core.model.Model;
import com.project.wst.Model.Common;
import com.project.wst.Service.CommonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Slf4j
public class CommonController {
    @Autowired
    private CommonService commonService;

    @RequestMapping(value = "/codes/classifications", method = RequestMethod.POST, produces = "application/json; charset=UTF-8")
    @ResponseBody //@RequestMapping 의 형태는 name = value 형태가 되어야한다
    public Map<String, Object> CodeController(Common common) {
        Map<String, Object> resultMap = new HashMap<>();
        List<Common> resultList = commonService.getMajorCode(common);
            resultMap.put("resultList",resultList);
            log.info("resultList" + resultMap);

        return resultMap;
        }
}

