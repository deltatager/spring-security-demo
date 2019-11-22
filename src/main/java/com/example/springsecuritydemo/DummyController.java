package com.example.springsecuritydemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello, world!";
    }

    @GetMapping("/private/hello")
    public String privateHello() {
        return "Hello, privileged world!";
    }
}

