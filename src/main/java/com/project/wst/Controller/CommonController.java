package com.project.wst.Controller;

import com.project.wst.Model.CodeGetModel;
import com.project.wst.Model.Common;
import com.project.wst.Service.CommonService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/codes")
@Slf4j
public class CommonController {

    @Autowired
    private CommonService commonService;

    @PostMapping(value = "/trash-type", produces = "application/json; charset=UTF-8")
    public Map<String, List<Common>> MajorCodeController(Common common) {
        Map<String, List<Common>> resultMap = new HashMap<>();
        List<Common> resultList = commonService.getTypeCode(common);
        resultMap.put("resultList", resultList);
        log.info("resultList : " + resultMap);

        return resultMap;
    }

    @PostMapping(value = "/major-code", produces = "application/json; charset=UTF-8")
    public Map<String, List<Common>> getMajorCode(Common common) {
        Map<String, List<Common>> resultMap = new HashMap<>();
        List<Common> resultList = commonService.getMajorCode(common);
        resultMap.put("resultList", resultList);
        log.info("resultList : " + resultMap);

        return resultMap;
    }

    @PostMapping(value = "/api/waste-code", produces = "application/json; charset=UTF-8")
    public Map<String, List<Common>> getSubCode(@RequestBody CodeGetModel codeGetModel) {
        String majorCode = codeGetModel.getMajorCode(); // majorCode 갖고오기
        String subCode = codeGetModel.getSubCode();
        Map<String, List<Common>> resultMap = new HashMap<>();
        log.info("majorCode : " + majorCode);
        log.info("subCode :" + subCode);

        if(majorCode != null && subCode == null) {
            List<Common> resultList = commonService.getSubCode(majorCode); // majorCode 갖고온걸로 getSubCode 에넣어 메서드 돌려서 나온 결과값을 resultList에 대입
            resultMap.put("resultList", resultList);
            log.info("resultList : " + resultMap);
            return resultMap;
        }
         // majorCode 와 subCode 둘 값이 존재할 경우 실행되는 코드
            List<Common> resultList = commonService.getDetailCode(majorCode,subCode);
            resultMap.put("resultList", resultList);
            log.info("resultList : " + resultMap);
            return resultMap;
    }

}

