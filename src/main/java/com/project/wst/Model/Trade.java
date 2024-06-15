package com.project.wst.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Trade {
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_code")
    private int tradeCode;
    private String wasteType;
    private LocalDateTime tradeDate;
    private int tradeCost;
    private int wasteQuantity;
    private int tax;
    private String client;
    private String remark;
}
