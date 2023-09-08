# Search

This module provides endpoints related to searching for locations based on user queries. It supports both single and sequence-based search queries.

## Dependencies

- fastapi: The main framework used for building the API.
- sqlalchemy: Provides ORM functionalities and SQL query building.
- geoalchemy2: Used for handling geographic objects in the database.
- numpy: Used for numerical operations.
- sentence_transformers: Used for encoding sentences into embeddings.
- schemas, models, oauth2: Internal modules containing data schemas, database models, and OAuth2 utilities respectively.

## Global Variables

- router: The APIRouter instance for the search endpoints, prefixed with /search.
- model: A SentenceTransformer model used for encoding queries into embeddings.
- LOCATION_TYPE_MODELS: A dictionary mapping location types to their respective database models.
- PROMPT_LOCATION_TYPE_MODELS: A dictionary mapping location types to their respective prompt-location database models.

## Utility Functions

- softmax(x): Computes the softmax values for a set of scores.

## Endpoints

### Search by Query Sequence Endpoint (/route/)

- Method: POST
- Input: querys (containing a list of user queries, location types, distance threshold, similarity threshold, route type, and current location coordinates)
- Output: A route based on the sequence of search results.
- Description: Searches for a sequence of locations based on the user's queries. For each query, it finds a location that matches the query's embedding and then creates a route based on the sequence of found locations.

Input Example:

{"query":"Boring","location_type":"landmark","longitude":144.9549,"latitude":-37.81803,"distance_threshold":10000,"similarity_threshold":0.1}

2. Create best route in terms of similarity using input as like of prompt

3. Sample route using probabilities from similarity

Input Example:

{"query":["Chinese","Chinese","Chinese"],"location_type":["landmark","restaurant","restaurant"],"longitude":144.9549,"latitude":-37.81803,"distance_threshold":1000,"similarity_threshold":0}
