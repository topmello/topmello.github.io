---
sidebar_position: 4
---

# User

This module provides endpoints related to user operations, such as generating a username, retrieving user details, and creating a new user.

## Dependencies

- fastapi: The main framework used for building the API.
- sqlalchemy.orm: Provides session management for database operations and ORM functionalities.
- passlib.context: Used for hashing and verifying passwords.
- schemas, models, oauth2: Internal modules containing data schemas, database models, and OAuth2 utilities respectively.

## Global Variables

- router: The APIRouter instance for the user endpoints, prefixed with /user.
- pwd_context: A context for hashing and verifying passwords using the bcrypt algorithm.

## Utility Functions

- hash(password: str): Returns the hashed version of the provided password.
- verify(password: str, hashed_password: str): Verifies if the provided password matches the hashed password.

## Endpoints

### Generate Username Endpoint (/generate)

- Method: GET
- Output: A generated username.
- Description: Generates a unique username. If the generated name exists in the database, it keeps generating until a unique name is found.

### Get User Details Endpoint (/{user_id})

- Method: GET
- Input: user_id (Path parameter)
- Output: User details including their prompts.
- Description: Retrieves the details of a user based on the provided user ID. The endpoint checks if the user ID matches the ID of the currently authenticated user. If not, it raises an authorization error.

### Create User Endpoint (/)

- Method: POST
- Input: User details (username, password, etc.)
- Output: Created user details.
- Description: Creates a new user in the database. Before creating, it checks if the username is already registered. If so, it raises an error. The password provided by the user is hashed before storing in the database.
