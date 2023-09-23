---
sidebar_position: 2
---
# Global State Management
# AppState Documentation

Manage global application states such as theme, language, loading status, and notifications with the `AppState` Redux slice.

## **State Structure**

The `AppState` has the following structure:

```
{
  isLoading: boolean,
  isFail: {
    message: string
  } | null,
  theme: "light" | "dark" | "system" | undefined,
  language: "en-AU" | "zh-CN" | "hi-IN" | undefined,
  privacyChecked: boolean,
  roomId: string | undefined
}
```

## Usage

To use the `AppState` Redux slice, make sure to add it to your store's reducer.

### State Selectors

These functions allow you to retrieve specific pieces of state:

- `selectIsLoading`: Returns the `isLoading` state.
- `selectIsFail`: Returns the `isFail` state.
- `selectTheme`: Returns the `theme` state.
- `selectLanguage`: Returns the `language` state.
- `selectPrivacyChecked`: Returns the `privacyChecked` state.
- `selectRoomId`: Returns the `roomId` state.

### Actions

- `loading`: Set the `isLoading` state to true.
- `loaded`: Set the `isLoading` state to false.
- `fail`: Set the `isLoading` state to false and update the `isFail` message.
- `setDarkTheme`, `setLightTheme`, and `setSystemTheme`: Update the `theme` state.
- `setLanguage`: Set the language state to one of the available languages.
- `setPrivacyChecked` and `setPrivacyUnchecked`: Set the `privacyChecked` state.
- `setRoomId`: Update the `roomId` state.

# AuthState Documentation

Manage authentication states and user-specific details with the `AuthState` Redux slice.

## **State Structure**

The `AuthState` has the following structure:

```
{
  id?: number,
  username?: string,
  token?: string,
  tokenExpiresAt?: string,
  refreshToken?: string,
  refreshTokenExpiresAt?: string,
  status: 'idle' | 'login' | 'loginSuccess' | 'loginFail' | 'logout' | 'registering' | 'registerSuccess' | 'registerFail' | 'refreshing' | 'refreshSuccess' | 'refreshFail' | 'logout'
}
```

## **Actions**

### Thunks

- `loginUser`: An asynchronous action to log in a user. Accepts an object with `username` and `password`.
- `refreshToken`: An asynchronous action to refresh the user's access token using the refresh token.
- `registerUser`: An asynchronous action to register a new user. Accepts an object with `username` and `password`.

### Reducers

- `logoutUser`: Log out the user and reset their authentication data.

## **Usage**

### State Selectors

Utilize the following functions to retrieve specific pieces of the authentication state:

- `selectUserId`: Returns the user's ID.
- `selectUsername`: Returns the user's username.
- `selectToken`: Returns the user's access token.
- `selectAuthStatus`: Returns the current status of the authentication process.
- `selectTokenExpiresAt`: Returns the expiration time of the access token.
- `selectRefreshToken`: Returns the user's refresh token.
- `selectRefreshTokenExpiresAt`: Returns the expiration time of the refresh token.

# RouteState Documentation

The `RouteState` Redux slice manages user routing preferences and configurations.

## **State Structure**

The `RouteState` has the following structure:

```
{
  location_type: LocationType[];
  query: string[];
  negative_query: string[];
  longitude: number;
  latitude: number;
  distance_threshold: number; // Distance between each location in meters
  similarity_threshold: number; // Range: 0-1
  negative_similarity_threshold: number; // Range: 0-1
  route_type: RouteType;
}
```

## **Actions**

### Reducers

- `setLocationType`: Set the location types.
- `setQueryWithLocationType`: Set the location type, query, and negative query. Both the location type and query arrays must be of the same length.
- `setLonLat`: Set the longitude and latitude for the route.
- `setDistanceThreshold`: Set the distance threshold for the route.
- `setSimilarityThreshold`: Set the similarity threshold for the route.
- `setRouteType`: Set the type of the route (e.g., walking, driving, etc.).

## **Selectors**

Utilize the following functions to retrieve specific pieces of the routing state:

- `selectLocationType`: Returns the type of locations.
- `selectQuery`: Returns the query strings.
- `selectLonLat`: Returns the longitude and latitude.
- `selectDistanceThres`: Returns the distance threshold.
- `selectRouteState`: Returns the entire route state.