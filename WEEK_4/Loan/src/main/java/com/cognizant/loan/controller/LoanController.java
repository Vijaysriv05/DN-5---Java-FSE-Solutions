package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class LoanController {

    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {

        Map<String, Object> loan = new HashMap<>();

        loan.put("number", number);
        loan.put("type", "Home Loan");
        loan.put("loan", 500000);

        return loan;
    }
}