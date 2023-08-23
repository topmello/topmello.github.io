---
sidebar_position: 1
---
# Backend Design Introduction

Backend is designed to allow user login, search, and generate itinerary given keywords query

## Login
Implemented using OAuth2 with Password (and hashing), Bearer with JWT tokens
JWT (JSON Web Tokens) token: Anyone could recover the information from the contents, but it's signed. So, when you receive a token that you emitted, you can verify that you actually emitted it.

Reference: https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/

## Query
...

## Translation
...