package com.project.wst.Model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Common {
    private String majorCode;
    private String subCode;
    private String detailCode;
    private String attributeCode;
    private String nameCode;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
