package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public Country getCountry(String code) {

        if(code.equalsIgnoreCase("in")) {
            return new Country("IN","India");
        }

        if(code.equalsIgnoreCase("us")) {
            return new Country("US","United States");
        }

        if(code.equalsIgnoreCase("jp")) {
            return new Country("JP","Japan");
        }

        return new Country("NA","Country Not Found");
    }
}
