package com.project.wst;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
@MapperScan
@SpringBootApplication
public class ProjectCollectionApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectCollectionApplication.class, args);
    }

}
