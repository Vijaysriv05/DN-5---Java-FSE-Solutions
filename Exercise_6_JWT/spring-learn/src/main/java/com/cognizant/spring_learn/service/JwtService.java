package com.cognizant.spring_learn.service;

import org.springframework.stereotype.Service;

import com.cognizant.spring_learn.util.JwtUtil;

@Service
public class JwtService {

    private final JwtUtil jwtUtil = new JwtUtil();

    public String generateToken(String username) {
        return jwtUtil.generateToken(username);
    }

    public String extractUsername(String token) {
        return jwtUtil.extractUsername(token);
    }

    public boolean validateToken(String token, String username) {
        return jwtUtil.validateToken(token, username);
    }
}