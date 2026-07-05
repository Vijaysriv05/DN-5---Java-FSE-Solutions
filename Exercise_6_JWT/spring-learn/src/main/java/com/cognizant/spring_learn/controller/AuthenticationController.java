package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.LoginRequest;
import com.cognizant.spring_learn.model.LoginResponse;
import com.cognizant.spring_learn.service.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {

        String username = request.getUsername();
        String password = request.getPassword();

        if (("admin".equals(username) && "admin123".equals(password))
                || ("user".equals(username) && "user123".equals(password))) {

            String token = jwtService.generateToken(username);

            return new LoginResponse(token);
        }

        throw new RuntimeException("Invalid Username or Password");
    }

    @GetMapping("/")
    public String home() {
        return "Welcome to JWT Authentication";
    }

    @GetMapping("/user")
    public String user() {
        return "Welcome User";
    }

    @GetMapping("/admin")
    public String admin() {
        return "Welcome Admin";
    }
}