# Schema

This document provides a detailed overview of the Pydantic schemas used for data validation and serialization in the API.

### UserCreate

- username: A string with a length between 4 and 20 characters. It must start with a letter and can contain letters, numbers, and underscores.
- password: A string with a length between 4 and 20 characters. It can contain letters, numbers, and special characters (!@#$%^&\*).

### LoginRequest

Similar to UserCreate but used for login purposes.

### User

- user_id: An integer representing the user's ID.
- username: A string representing the user's name.
- password: A string representing the user's password.
- created_at: A datetime object representing when the user was created.

### Prompt

- prompt_id: An integer representing the prompt's ID.
- created_by_user_id: An integer representing the ID of the user who created the prompt.
- prompt: A list of strings, each with a maximum length of 50 characters.
- location_type: A list of strings.
- created_at: A datetime object representing when the prompt was created.

### UserOut

- user_id: An integer representing the user's ID.
- username: A string representing the user's name.
- created_at: A datetime object representing when the user was created.
- prompts: A list of Prompt objects associated with the user.

### Token

- access_token: A string representing the access token.
- token_type: A string representing the type of the token.

### TokenV2

- Extends Token and adds:
- refresh_token: A string representing the refresh token.

### RefreshTokenIn

- refresh_token: A string representing the refresh token.

### TokenData

- user_id: An integer representing the user's ID.
- username: A string representing the user's name.

### Query

- query: A string representing the user's search query.
- location_type: A string representing the type of location. Valid values are 'landmark', 'restaurant', 'grocery', and 'pharmacy'.
- longitude: A float representing the longitude of the user's current location.
- latitude: A float representing the latitude of the user's current location.
- distance_threshold: A float representing the maximum distance for search results.
- similarity_threshold: A float representing the minimum similarity score for search results.

### QuerySeq

- Extends Query but allows for lists of queries and location types.

### RouteQuery

- Extends QuerySeq and adds:
- route_type: A string representing the type of route. Valid values are 'driving', 'walking', and 'cycling'.

### SearchResult

- name: A string representing the name of the location.
- latitude: A float representing the latitude of the location.
- longitude: A float representing the longitude of the location.
- similarity: A float representing the similarity score of the location to the query.

### RouteOut

- locations: A list of strings representing the names of the locations in the route.
- locations_coordinates: A list of dictionaries with 'latitude' and 'longitude' keys representing the coordinates of the locations.
- route: A list of dictionaries with 'latitude' and 'longitude' keys representing the coordinates of the route.
- instructions: A list of strings representing the instructions for the route.
- duration: A float representing the duration of the route.

### UsernameGen

- username: A string representing a generated username.

### TranslateQuery

- texts: A list of strings, each with a maximum length of 50 characters, representing the texts to be translated.

### TranslateRes

- results: A list of strings representing the translated texts.
