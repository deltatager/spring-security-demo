package com.example.springsecuritydemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {

    @GetMapping("/hello")
    public String helloWorld() {
        return "{\"message\": \"Hello, world!\"}";
    }

    @GetMapping("/private/hello")
    public String privateHello() {
        return "{\"message\": \"Hello, privileged world!\"}";
    }

    @GetMapping("/private/admin")
    public String adminHello() {
        return "{\"message\": \"Hello, admin world!\"}";
    }
}

