# Challenges

---

### 1. Fetch Leaderboard

- **URL**: `/leaderboard/`
- **Method**: `GET`
- **URL Parameters**: 
    - `limit`: integer, optional (default is 10)
- **Description**: This endpoint returns the top N users based on their weekly scores. `limit` specifies the number of top users to fetch.
- **Response**: 
    - **LeaderboardOut**
        - `username` (string): The username of the user.
        - `score` (float): The overall score of the user.
    - Example: 
    ```json
    [
        {"username": "user1", "score": 320.5},
        {"username": "user2", "score": 280.2}
    ]
    ```

---

### 2. Fetch User Challenge

- **URL**: `/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
    - `user_id`: integer, required
- **Description**: This endpoint returns the challenges created today for the given `user_id`.
- **Response**: 
    - list of **UserChallengeOut**
        - `challenge` (Challenge): The challenge details.
            - `name` (string): The name of the challenge.
            - `type` (string): The type of the challenge.
        - `year` (integer): The year of the challenge.
        - `month` (integer): The month of the challenge.
        - `day` (integer): The day of the challenge.
        - `progress` (float): The progress of the challenge.
    - Example: 
    ```json
    [{
        "challenge": {"name": "Walk 5000 Steps", "type": "distance_travelled"},
        "year": 2023,
        "month": 9,
        "day": 30,
       "progress": 0.8
    }]
    ```

---

### 3. Fetch All Challenges for User

- **URL**: `/all/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
    - `user_id`: integer, required
- **Description**: This endpoint returns all the challenges for the given `user_id`.
- **Response**: Returns a list of **UserChallengeOut** as described above.

---

### 4. Calculate Weekly Score

- **URL**: `/weekly_score/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
    - `user_id`: integer, required
- **Description**: This endpoint calculates and returns the weekly scores for the given `user_id`.
- **Response**: 
    - list of **ChallengeScoreOut**
        - `date` (datetime): The date of the score.
        - `score` (float): The overall score.
        - `distance_travelled_score` (float, optional): The score from distance travelled challenges.
        - `route_generation_score` (float, optional): The score from route generation challenges.
        - `favourite_sharing_score` (float, optional): The score from favourite sharing challenges.
    - Example: 
    ```json
    [{
        "date": "2023-09-30T12:00:00",
        "score": 100.5,
        "distance_travelled_score": 50.2,
        "route_generation_score": 25.1,
        "favourite_sharing_score": 25.2
    }]
    ```

---

### 5. Add Challenge Distance Travelled

- **URL**: `/distance_travelled/{user_id}/`
- **Method**: `POST`
- **URL Parameters**: 
    - `user_id`: integer, required
- **Description**: This endpoint adds a distance travelled challenge for a user.
- **Request Body**: 
    - **DistanceTravelledChallenge**
        - `steps` (integer, 0 ≤ steps ≤ 50000): The number of steps travelled.
    - Example: 
    ```json
    {
        "steps": 45000
    }
    ```
- **Response**: Returns a dictionary with details about the operation.

---

### 6. Add Challenge Route Generation

- **URL**: `/route_generation/{user_id}/`
- **Method**: `POST`
- **URL Parameters**: 
    - `user_id`: integer, required
- **Description**: This endpoint adds a route generation challenge for a user.
- **Request Body**: 
    - **RouteGenerationChallenge**
        - `routes_generated` (integer): The number of routes generated.
    - Example: 
    ```json
    {
        "routes_generated": 5
    }
    ```
- **Response**: Returns a dictionary with details about the operation.

---

### 7. Add Challenge Favourite Sharing

- **URL**: `/favourite_sharing/{user_id}/`
- **Method**: `POST`
- **URL Parameters**: 
    - `user_id`: integer, required
- **Description**: This endpoint adds a favourite sharing challenge for a user.
- **Request Body**: 
    - **RouteFavChallenge**
        - `routes_favourited_shared` (integer): The number of routes favourited/shared.
    - Example: 
    ```json
    {
        "routes_favourited_shared": 3
    }
    ```
- **Response**: Returns a dictionary with details about the operation.
