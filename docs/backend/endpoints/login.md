---
sidebar_position: 3
---

# Authentication



## **Authenticate User (v1)**

- **URL**: `/login/`
- **Method**: `POST`
- **Body Parameters**: 
  - `user_credentials`: A JSON object with the user's `username` and `password`.
- **Description**: 
  This endpoint attempts to authenticate a user using the provided credentials. If successful, it returns a JWT access token.
  
- **Response**: 
  A JSON object containing an `access_token` and its `token_type` which is "bearer".

## **Authenticate User (v2)**

- **URL**: `/login/v2/`
- **Method**: `POST`
- **Body Parameters**: 
  - `user_credentials`: A JSON object with the user's `username` and `password`.
- **Description**: 
  This enhanced version of the login endpoint offers additional features over its predecessor. When a user is authenticated, it returns a JWT access token, as well as a refresh token to enable future token renewals without requiring re-authentication. The endpoint also handles cases where the login request originates from a web UI, setting the JWT as a cookie.
  
- **Response**: 
  A JSON object containing the user's `user_id`, `username`, the `access_token` and its `token_type` which is "bearer", as well as the `refresh_token` and their respective expiration times.

## **Refresh Access Token**

- **URL**: `/login/v2/refresh/`
- **Method**: `POST`
- **Body Parameters**: 
  - `refresh_token`: A JSON object with the refresh token used to generate a new access token.
- **Description**: 
  This endpoint allows a user to refresh their JWT access token using a valid refresh token. By using the refresh mechanism, users can obtain a new access token without undergoing a full re-authentication process.
  
- **Response**: 
  A JSON object containing the user's `user_id`, `username`, a new `access_token` and its `token_type` which is "bearer", as well as the existing `refresh_token` and their respective expiration times.
