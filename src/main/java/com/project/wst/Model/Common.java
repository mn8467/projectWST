package com.project.wst.Model;

import jakarta.persistence.Entity;
import lombok.Data;


@Data
public class Common {
    private String majorCode;
    private String majorName;
    private String subCode;
    private String subName;
    private String detailCode;
    private String attributeCode;
    private String nameCode;
    private String createdAt; //데이터 뽑을때 TO_CHAR() 사용하므로
    private String updatedAt;
}
