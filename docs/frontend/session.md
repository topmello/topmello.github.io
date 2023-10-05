# Session Management
Session management is a cornerstone of ensuring a seamless and secure user experience in React Native applications. As mobile apps frequently interact with backend services and APIs, maintaining a secure and persistent session is crucial. Without proper session management, users might encounter unexpected logouts, or, even worse, their data could be exposed to security breaches. By leveraging JSON Web Tokens (JWT) for some of our API accesses, we provide a stateless, server-side solution that ensures data integrity and authenticity between the client and server. JWTs are compact, self-contained, and can securely transmit information between parties. Thus, by adopting JWTs in our React Native app, we not only enhance the application's security but also optimize its performance, reducing the need for continuous server queries about user status.  
In this app, custom hook `useSession` is used to provide convenient access to do session vaildity checks. You should check the session vaildity before making an credential required api call, in order to avoid session token expired or refresh the access token when feasible.
## `useSession` Hook

The `useSession` hook provides an interface for checking the validity of a user's session. It uses both an access token and a refresh token to manage the session. If the access token is expired, the hook will attempt to refresh it using the refresh token.

### Installation

To use the `useSession` hook, first ensure you have the necessary dependencies:

```bash
npm install react react-redux lodash
```

### How to use

#### Importing

```javascript
import { useSession } from 'PATH_TO_USE_SESSION';
```

#### Basic Usage

```javascript
const { token, checkSession } = useSession();

if (!checkSession()) {
  console.log("Session is invalid or expired.");
} else {
  console.log("Session is active.");
}
```

### API

#### `useSession()`

This hook returns an object with two properties:

- `token`: The current access token.
- `checkSession`: An asynchronous function that checks the validity of the session.

#### `checkSession()`

Returns:
- `true` if the token is valid.
- `false` if the token and refresh token are both invalid or expired.

### Implementation Details

The `useSession` hook utilizes the following dependencies:

- `throttle` from `lodash` - Ensures that session checks do not happen too frequently, throttling them to once every second.
- Several hooks from `react` - Used to interact with the component's lifecycle and state.
- `useDispatch` and `useSelector` from `react-redux` - Facilitate interactions with the Redux store.

#### Internal Logic

1. The hook first checks for the presence and validity of the access token. If it's missing or expired, the hook will then check the refresh token.
2. If the refresh token is also missing or expired, the user is logged out.
3. If only the access token is expired, but the refresh token is valid, the hook will attempt to get a new access token using the refresh token.

For debugging purposes, set the `DEBUG` constant to `true` at the top of the hook implementation. This will log important actions and states to the console.

---