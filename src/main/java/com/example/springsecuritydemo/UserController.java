package com.example.springsecuritydemo;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public Authentication getCurrentUserAuth(Authentication authentication) {
        return authentication;
    }

    @GetMapping("/name")
    public String getCurrentUsername(Authentication auth) {
        return auth.getName();
    }

    @GetMapping("/roles")
    public Collection<? extends GrantedAuthority> getCurrentRoles(Authentication auth) {
        return auth.getAuthorities();
    }
}
