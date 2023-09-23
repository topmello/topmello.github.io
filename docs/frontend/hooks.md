---
sidebar_position: 3
---
# `useFetch` Hook

Just as React provides hooks to embed state and other React features into your components, `useFetch` serves as a custom hook that provides an abstraction over the fetching mechanism, tailored to work efficiently within the React component lifecycle.

## Overview

The `useFetch` hook is designed to interact with your API, handle various kinds of errors, and provide feedback to the user. It seamlessly integrates with your Redux store to maintain application state and utilizes other hooks for notifications, translations, and session management.

## Installation

Before you can use the `useFetch` hook, ensure you have the necessary dependencies:

```bash
npm install react react-redux axios react-i18next expo-router
```

## Usage

Here's a basic way to use the `useFetch` hook:

```jsx
const [data, fetchData] = useFetch(requestOptions);
```

### Parameters

- **requestOptions (`RequestOptions`):** This is the main configuration for your fetch request. It includes all the details needed to make an API call.
- **deps (`any[]` = []):** Dependencies for the effect. The fetch operation will re-run whenever these dependencies change.
- **initialData (`T`):** You can provide an initial value for the data. Useful in scenarios where you have default or placeholder data.
- **shouldFetchImmediately (`boolean` = true):** A boolean indicating if the fetch should run immediately when the component mounts.
- **notificationMsg (`string`):** A message to display as a notification when the fetch is successful.

### Returns

The hook returns an array with:

1. The fetched data (`T | null`)
2. A `fetchData` function to trigger the fetch manually.

## Deep Dive

### Session Validity

Before making the fetch, the hook checks the validity of the user session. If the session is invalid, it will dispatch a "Session Invalid" error to your Redux store.

### Handling Errors

The hook comes with an integrated error-handling mechanism. If the fetch encounters an error, the hook identifies its type and dispatches appropriate actions or notifications. Some of the handled errors include:

- Network Error
- Unknown Error
- Invalid Credentials
- No Location
- Already Voted

It's designed to give feedback both to your Redux store and the user via notifications.

### Notifications & Translations

The hook leverages the `useNotification` and `useTranslation` hooks to send user notifications and support internationalization respectively.

## Best Practices

- Always ensure the `requestOptions` provided are valid and are in the expected format.
- Be cautious about the dependencies (`deps`) you provide. Too many or irrelevant dependencies could lead to unnecessary fetches.
- To ensure the user gets feedback, always provide meaningful `notificationMsg` strings.

# `useKeyboardEvent` Hook

React Native offers a rich API set for various device-specific behaviors, one of which is keyboard interactions. Built atop React Native's `Keyboard` API, the `useKeyboardEvent` hook provides a seamless way to track the keyboard's visibility state within the lifecycle of your React components.

## Overview

The `useKeyboardEvent` hook provides an abstraction to listen for keyboard show/hide events and maintain the current visibility state of the keyboard. With this, developers can effortlessly implement responsive designs or functionalities that depend on the keyboard's state.

## Installation

Before diving into the `useKeyboardEvent` hook, ensure that you have `react-native` set up in your project:

```bash
npm install react-native
```

## Usage

Here's a simple example of how you can use the `useKeyboardEvent` hook:

```jsx
import { useKeyboardEvent } from 'path-to-your-hook';

function YourComponent() {
  const { keyboardShow } = useKeyboardEvent();

  return (
    // Your component JSX
  );
}
```

## Hook Return Values

When you invoke the `useKeyboardEvent` hook, it returns an object containing:

- **keyboardShow (`boolean`):** A boolean indicating the current visibility state of the keyboard. It's `true` when the keyboard is visible and `false` otherwise.

## Under the Hood

Internally, the hook leverages React Native's `Keyboard` API to listen for keyboard visibility events:

- `keyboardDidShow` event updates the state to indicate the keyboard is visible.
- `keyboardDidHide` event updates the state to indicate the keyboard is hidden.

Listeners are cleaned up appropriately to prevent potential memory leaks.

## Best Practices

- Ensure that the `useKeyboardEvent` hook is invoked within the body of a functional React component.
- Utilize the `keyboardShow` state to make UI adjustments, animate components, or change functionalities based on the keyboard's visibility state.

# useTrack Hook

## Overview

The `useTrack` hook provides real-time tracking capabilities using Socket.io, enabling users to join rooms, send location updates, and manage real-time events seamlessly.

## Installation

Ensure you have the required dependencies:

```bash
npm install react socket.io-client
```

## Usage

```jsx
import { useTrack } from 'path-to-your-hook';

function TrackingComponent() {
    const { 
        isConnected, 
        messages, 
        roomId, 
        joinRoom, 
        handleLeaveRoom, 
        createRoom, 
        startTrackMe, 
        exitRoom, 
        parentLocation 
    } = useTrack();

    // Component logic here...
}
```

## Features

### State Variables:

- **isConnected (`boolean`)**: Reflects the connection status to the server.
- **messages (`MessageData[]`)**: Stores messages or events from the server.
- **roomId (`string`)**: The ID of the currently active room.
- **parentLocation (`object`)**: Contains latitude and longitude of the parent's location.

### Methods:

- **joinRoom(room: string)**: Join a specified tracking room.
- **handleLeaveRoom(room: string)**: Exit a specific room.
- **createRoom()**: Asynchronously create a new tracking room. Returns the room ID upon success.
- **startTrackMe(room: string)**: Start tracking the current user's location and broadcast to a specific room.
- **exitRoom()**: Exit the current tracking room.

### Event Handling:

The hook listens to and manages several socket events:

- **`join_room`**: When a user joins a room.
- **`leave_room`**: When a user leaves a room.
- **`move`**: For broadcasting location updates.

Errors related to socket connections are logged to the console.

## Recommendations:

- Always check the `isConnected` state before performing socket operations.
- Ensure a stable internet connection to maintain socket connectivity.
