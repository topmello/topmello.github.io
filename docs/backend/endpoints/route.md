# Route

## Endpoint Descriptions

### 1. **Get Route Details**

- **URL**: `/routes/{route_id}/`
- **Method**: `GET`
- **URL Parameters**: 
  - `route_id`: The ID of the desired route.
- **Description**: 
  This endpoint retrieves detailed information about a specific route identified by the `route_id`. The returned data includes route ID, locations, coordinates, instructions, duration, creation time, and the number of votes for the route.

- **Response**: 
  The response will include a `route` object and a `num_votes` integer. The `route` object further contains `route_id`, `locations` (array of strings), `locations_coordinates` (array of objects with `latitude` and `longitude`), `route` (array of objects with `latitude` and `longitude`), `instructions` (array of strings), `duration` (floating-point number), and `created_at` (date-time in ISO 8601 format).

### 2. **Delete Route**

- **URL**: `/routes/{route_id}/`
- **Method**: `DELETE`
- **URL Parameters**: 
  - `route_id`: The ID of the route to delete.
- **Description**: 
  This endpoint allows for the deletion of a route specified by the `route_id`. The request must be made by the authenticated user who owns the route.
  
- **Response**: 
  Upon successful deletion, the server will return a `204 No Content` HTTP status code with no response body. If the route does not exist or the user is not authorized, appropriate error codes and messages will be returned.


### 3. **Get Routes by User ID**

- **URL**: `/user/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
  - `user_id`: The ID of the user whose routes are to be retrieved.
- **Description**: 
  Retrieves a list of routes created by a specified user. The endpoint includes pagination support with offset and limit parameters, and is rate-limited to 5 requests per second.
- **Query Parameters**:
  - `offset`: Starting point for pagination, default is 0.
  - `limit`: Maximum number of routes to retrieve, default is 10.
- **Response**: 
  A list of routes and their respective vote counts.
  
### 4. **Get Favorite Routes by User ID**

- **URL**: `/user/fav/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
  - `user_id`: The ID of the user whose favorite routes are to be retrieved.
- **Description**: 
  Retrieves a list of favorite routes created by a specified user. Similar to the above endpoint, this also includes pagination and rate-limiting.
- **Query Parameters**:
  - `offset`: Starting point for pagination, default is 0.
  - `limit`: Maximum number of favorite routes to retrieve, default is 10.
- **Response**: 
  A list of favorite routes and their respective vote counts.
  
### 5. **Get Routes Favorited by User ID**

- **URL**: `/feed/user/fav/{user_id}/`
- **Method**: `GET`
- **URL Parameters**: 
  - `user_id`: The ID of the user whose favorited routes are to be retrieved.
- **Description**: 
  Retrieves a list of routes favorited by a specified user. This also includes pagination and rate-limiting functionality.
- **Query Parameters**:
  - `offset`: Starting point for pagination, default is 0.
  - `limit`: Maximum number of routes to retrieve, default is 10.
- **Response**: 
  A list of routes and their respective vote counts.
  
### 6. **Publish a Route**

- **URL**: `/publish/{route_id}/`
- **Method**: `POST`
- **URL Parameters**: 
  - `route_id`: The ID of the route to be published.
- **Description**: 
  This endpoint allows users to publish their route to the public feed after checking the existence of the route and the authorization of the user.
- **Response**: 
  A dictionary containing details about the publishing status.
  
### 7. **Get Top Routes**

- **URL**: `/feed/top_routes/`
- **Method**: `GET`
- **Description**: 
  Returns the top routes based on the provided criteria and order, either by creation date or votes. It first fetches the route IDs from Redis and then queries the database for more details.
- **Query Parameters**:
  - `order_by`: The ordering criterion, can be either 'created_at' or 'num_votes'. Defaults to 'num_votes'.
  - `offset`: Starting point for pagination, default is 0.
  - `limit`: Maximum number of routes to return, default is 10.
- **Response**: 
  A list of top routes with their associated vote details.

Each of these endpoints is designed to work with the user and route data, allowing retrieval and publication of routes based on various parameters and criteria. Proper authorization, rate limiting, and pagination have been applied where necessary to ensure the security and efficiency of the API.