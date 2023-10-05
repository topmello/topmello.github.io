---
sidebar_position: 4
---

# Data Validation with Pydantic in FastAPI

FastAPI leverages the power of Pydantic for data validation, serialization, and documentation. Pydantic ensures that the data conforms to expected formats and helps in error handling. Below is a brief description of each schema:

- **UserCreate**: Defines the structure for user creation with constraints on username and password length and pattern.
  
- **LoginRequest**: Represents user login request, with validation on username and password.
  
- **User**: Describes a user with attributes like user_id, username, password, and creation date.
  
- **Prompt & PromptV2**: Outlines prompts created by users with attributes like prompt id, user id, prompts, and creation date. Version 2 (`PromptV2`) also includes negative prompts.
  
- **RouteOut & RouteOutV2**: Defines route data. Version 2 (`RouteOutV2`) includes additional attributes like route id and creation date. It also converts latitudes and longitudes into dictionary format.
  
- **RouteVoteOut & RouteVoteOutUser**: Outlines user votes for routes. The latter also indicates if a user has voted.
  
- **UserOut**: Describes a user along with their associated prompts.
  
- **Token & TokenV2**: Represents token data, with the latter (`TokenV2`) offering a comprehensive view, including user id, access, and refresh token details.
  
- **Query, QuerySeq, RouteQuery, & RouteQueryV2**: Defines search parameters for location-based queries. They include validation for location type and route type.
  
- **SearchResult**: Represents search results, providing the name, coordinates, and similarity of the result.
  
- **UsernameGen & TranslateQuery**: Outlines structures for generating usernames and translating queries, respectively.
  
- **VoteIn**: Represents the structure for user votes on routes.
  
- **Challenge & UserChallengeOut**: Defines challenges and user interactions with challenges.
  
- **LeaderboardOut**: Represents user scores on a leaderboard.

The schemas incorporate constraints like `constr()` and `conint()`, ensuring data like username and password adhere to specific formats or value ranges. Validators like `field_validator` and `root_validator` ensure custom validations on fields, enhancing the robustness of data input.

In essence, Pydantic, combined with FastAPI, offers a systematic and efficient approach to manage and validate incoming and outgoing data, ensuring data integrity and minimizing potential errors.
