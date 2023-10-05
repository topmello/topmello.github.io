# Search Endpoint

## **Search for a Route Based on User Queries**

- **URL**: `/search/route/`
- **Method**: `POST`
- **Body Parameters**: 
  - `querys`: A JSON object containing the user's desired `location_type`, `latitude`, `longitude`, `distance_threshold`, `similarity_threshold`, and desired `route_type`.
- **Description**: 
  This endpoint allows users to search for a route based on specific queries and their current location. The returned route is calculated by matching the user's query against available locations within a specified distance threshold and similarity score. Furthermore, this route is saved as a prompt linked to the user's account.
  
- **Response**: 
  A JSON object representing the found route. This includes the list of locations, their coordinates, the route's path, instructions for the route, and the route's total duration.

## **Enhanced Route Search with Negative Queries**

- **URL**: `/search/v2/route/`
- **Method**: `POST`
- **Body Parameters**: 
  - `querys`: An enhanced JSON object that, in addition to the parameters in the previous endpoint, allows users to provide negative queries to exclude certain results.
- **Description**: 
  This enhanced version of the search route allows users to provide additional negative queries, ensuring that certain types of locations are excluded from the resulting route. If a location matches a negative query with a similarity score higher than a specified threshold, it is excluded from the search results. This endpoint is particularly useful for users who want more control over the types of places included in their routes.
  
- **Response**: 
  A JSON object representing the found route, similar to the previous endpoint but with the addition of a route ID. This ID can be used to reference the route in other parts of the system.
This module provides endpoints related to searching for locations based on user queries. It supports both single and sequence-based search queries.
