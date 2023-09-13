---
sidebar_position: 3
---

# Login

Implemented using OAuth2 with Password (and hashing), Bearer with JWT tokens
JWT (JSON Web Tokens) token: Anyone could recover the information from the contents, but it's signed. So, when you receive a token that you emitted, you can verify that you actually emitted it. This module provides authentication endpoints for users. It includes features like login, token refresh, and IP-based rate limiting to prevent brute-force attacks.

Reference:

- https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/
- https://jwt.io/introduction

## Global Variables

- ip_blocklist: A dictionary to store blocked IP addresses.
- ip_attempts: A dictionary to track login attempts by IP.
- BLOCK_DURATION: Duration for which an IP remains blocked after exceeding max attempts.
- MAX_ATTEMPTS: Maximum allowed login attempts before an IP is blocked.

## Utility Functions

- check_blocked_ip(request: Request): Checks if the IP from the request is blocked. If blocked and the block duration has not expired, it raises an HTTPException. If the block duration has expired, it unblocks the IP.

## Endpoints

### Login Endpoint (/login)

- Method: POST
- Input: user_credentials (username and password)
- Output: JWT token
- Description: Authenticates the user and returns a JWT token. If the user exceeds the maximum allowed login attempts, their IP is blocked for a specified duration.
- Status Code:

### Login V2 Endpoint (/v2/login)

- Method: POST
- Input: user_credentials (username and password)
- Output: JWT token and refresh token
- Description: An enhanced version of the login endpoint. In addition to authenticating the user and returning a JWT token, it also provides a refresh token. If a user already has a refresh token, the old one is deleted and a new one is generated.
- Status Code:

### Refresh Token Endpoint (/v2/token/refresh)

- Method: POST
- Input: refresh_token
- Output: New JWT token and the same refresh token
- Description: Allows the user to get a new JWT token using their refresh token. The refresh token remains the same.
- Status Code:

## Security Measures

- Rate Limiting: The endpoints are rate-limited to prevent abuse.
- IP Blocking: IP addresses are temporarily blocked after multiple failed login attempts to prevent brute-force attacks.
- JWT: JSON Web Tokens (JWT) are used for authentication and authorization.
