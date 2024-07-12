package com.project.wst.Model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Status {
    private String waste_type;
    private int user_code;
    private int waste_inventory;
    private LocalDateTime last_trade_date;

}
