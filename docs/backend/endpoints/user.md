---
sidebar_position: 4
---

# User endpoint

## **Generate Username**

- **URL**: `/user/generate/`
- **Method**: `GET`
- **Description**: 
  This endpoint automatically creates a unique username. It utilizes a Transformer decoding architecture to generate the username and ensures its uniqueness by verifying against existing names in the database.
  
- **Response**: 
  The response will include a `username` string, representing the newly generated username.

## **Retrieve User by ID**

- **URL**: `/user/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
  - `user_id`: The ID of the user to retrieve.
- **Description**: 
  This endpoint fetches a specific user based on their `user_id`. It also returns the latest prompts associated with that user. For security reasons, users can only fetch their own details.
  
- **Response**: 
  The response will return the user's details, such as `user_id`, `username`, `created_at`, and an array of their most recent `prompts`.

## **Create User**

- **URL**: `/user/`
- **Method**: `POST`
- **Description**: 
  This endpoint allows the creation of a new user. It ensures that the username is unique and hashes the password before storing it in the database.
  
- **Body Parameters**: 
  - `user`: The user details to be created. It includes fields like `username` and `password`.
  
- **Response**: 
  The response will return the created user's details, including `user_id`, `username`, and `created_at`.
