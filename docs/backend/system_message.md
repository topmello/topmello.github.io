# System Message

## HTTP Exceptions 🚨

| Exception Type               | Status Code | Type                      | Message                                                                          |
| ---------------------------- | ----------- | ------------------------- | -------------------------------------------------------------------------------- |
| CustomHTTPException          | 400         | `default_type`            | DefaultMessage                                                                   |
| InvalidCredentialsException  | 401         | `invalid_credentials`     | Invalid credentials                                                              |
| UserNotFoundException        | 404         | `user_not_found`          | User not found                                                                   |
| UserAlreadyExistsException   | 400         | `user_already_exists`     | User already exists                                                              |
| InvalidRefreshTokenException | 404         | `invalid_refresh_token`   | Invalid refresh token                                                            |
| NotAuthorisedException       | 403         | `not_authorised`          | Not authorised                                                                   |
| LocationNotFoundException    | 404         | `no_location`             | Not found any location in the given area                                         |
| InvalidSearchQueryException  | 400         | `invalid_search_query`    | Invalid search query                                                             |
| RouteNotFoundException       | 404         | `no_route`                | Not found any route in the given area                                            |
| ParametersTooLargeException  | 400         | `parameters_too_large`    | Parameters too large                                                             |
| AlreadyVotedException        | 409         | `already_voted`           | Already voted                                                                    |
| VoteNotFoundException        | 404         | `vote_not_found`          | Vote not found                                                                   |
| RequestValidationError       | 400         | `missing`                 | Field required                                                                   |
| RequestValidationError       | 400         | `string_pattern_mismatch` | String should match pattern                                                      |
| RequestValidationError       | 400         | `json_invalid`            | JSON decode error                                                                |
| RequestValidationError       | 400         | `string_type`             | Input should be a valid string                                                   |
| RequestValidationError       | 400         | `string_too_short`        | String should have at least {} characters                                        |
| RequestValidationError       | 400         | `string_too_long`         | String should have at most {} characters                                         |
| RequestValidationError       | 400         | `value_error`             | Location type must be one of 'landmark', 'restaurant', 'grocery', or 'pharmacy'. |
| RequestValidationError       | 400         | `value_error`             | Route type must be one of 'driving', 'walking', or 'cycling'.                    |

## SocketIO messages 📨

| Event        | Message Type | Details Type                | Details Msg                                              |
| ------------ | ------------ | --------------------------- | -------------------------------------------------------- |
| `connect`    | `error`      | `invalid_credentials`       | 'Invalid credentials'                                    |
|              | N/A          | Varies with `HTTPException` | Depends on the error detail from exception               |
| `join_room`  | `error`      | `no_room`                   | 'Room not found or has expired'                          |
|              | `room`       | `joined_room`               | E.g. "admin has joined room 448408"                      |
| `leave_room` | `room`       | `lefted_room`               | E.g. "admin has left room 448408"                        |
| `move`       | `move`       | `success`                   | Object with `lat` and `long`, e.g. `{lat: 34, long: 34}` |
|              | `error`      | `invalid_data`              | 'Invalid data'                                           |
| `disconnect` | `room`       | `disconnected`              | E.g. "admin disconnected"                                |

To get message in the frontend:

- const messageType = message.type;
- const detailsType = message.message.details.type;
- const detailsMsg = message.message.details.msg;

## Logs 📜

[Logs](https://api.settle-aid.tech/logs/)

<iframe src="https://api.settle-aid.tech/logs/" width="100%" height="600px"></iframe>
