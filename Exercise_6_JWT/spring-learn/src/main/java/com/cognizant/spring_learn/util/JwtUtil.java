package com.cognizant.spring_learn.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.function.Function;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;

public class JwtUtil {

    private static final String SECRET = "MyJwtSecretKeyForSpringBootProject123456789";

    private static final Key KEY = new SecretKeySpec(
            SECRET.getBytes(),
            SignatureAlgorithm.HS256.getJcaName());

    public String generateToken(String username) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(KEY)
                .compact();
    }

    public String extractUsername(String token) {

        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {

        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token,
            Function<Claims, T> resolver) {

        Claims claims = Jwts.parser()
                .verifyWith((javax.crypto.SecretKey) KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return resolver.apply(claims);
    }

    public boolean isTokenExpired(String token) {

        return extractExpiration(token).before(new Date());
    }

    public boolean validateToken(String token,
            String username) {

        return username.equals(extractUsername(token))
                && !isTokenExpired(token);
    }
}