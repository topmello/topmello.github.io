---
sidebar_position: 6
--- 


# Unit Test

## Setup

- **test_client**: This fixture sets up a test client for the FastAPI application. It also handles database migrations and inserts test data.

## Tests

1. **test_access_docs**: 
    - Tests if accessing the root endpoint returns a 401 Unauthorized status.
    - Checks if the response contains the 'WWW-Authenticate' header.

2. **test_generate_name**: 
    - Tests the endpoint responsible for generating a name.
    - Asserts a 200 OK status.

3. **test_translate**: 
    - Tests the translation endpoint.
    - Sends a Chinese greeting and expects the translation to be "Hello".

4. **test_create_user**: 
    - Tests user creation.
    - Checks for either a successful creation or an error indicating the username is already registered.

5. **test_login** and **test_login_v2**: 
    - Tests user login functionality.
    - Checks for a successful login and the presence of an access token in the response.
    - The V2 version also tests the refresh token functionality.

6. **test_route** and **test_route_v2**: 
    - Tests route generation based on search criteria.
    - Checks for successful route generation and the expected number of locations in the route.
    - The V2 version includes additional tests for route retrieval and deletion.

7. **test_vote**: 
    - Tests the voting functionality for a route.
    - Checks for successful vote creation, vote conflict, and vote deletion.

8. **test_challenge**: 
    - Tests the challenge functionality.
    - Checks for successful challenge creation based on different criteria (distance traveled, routes generated, favorite routes shared).
    - Retrieves all challenges for the user and filters out the challenges for the current day.
    - For each of today's challenges, it checks if the progress is between 0 and 1.
    - It also checks specific challenges to ensure the progress matches the expected values.


