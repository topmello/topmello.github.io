---
title: Location Sharing
sidebar_position: 7
---
# Location Sharing

## `useTrack` Hook Documentation

### Introduction

The `useTrack` custom hook is designed to facilitate real-time location tracking in React Native applications. Leveraging the power of WebSockets via `socket.io-client`, this hook offers methods to create, join, and leave tracking rooms, broadcast location movements, and maintain a log of messages related to tracking events.

### Key Features

- **Real-time Communication**: Utilizes Socket.IO for real-time bidirectional event-based communication.
- **Redux Integration**: Seamlessly integrates with Redux for state management.
- **Location Sharing**: Enables users to share their current location in real-time and receive location updates from others.
- **Dynamic Room Creation**: Provides functionality to generate unique tracking rooms.

### Data Types

#### `MoveMessage`

Represents a location update:

- `lat`: Latitude.
- `long`: Longitude.
- `roomId`: The unique identifier for the tracking room.
- `type`: Always set to `"move"` for this type.

#### `JoinMessage`

Represents a message when a user joins a room:

- `message`: Message content, typically indicating a user has joined.
- `type`: Always set to `"join_room"` for this type.

#### `MessageData`

A union type that could either be `MoveMessage` or `JoinMessage`.

### Functionality Overview

#### `useTrack`

This is the main custom hook function which encapsulates all tracking related functionalities:

- **Socket Connection**: When a token is available, the hook establishes a socket connection to the server, registering multiple event listeners for various socket events.
  
- **Messages**: An array that logs all received messages related to join events and move events.

- **Location Broadcasting**: Whenever a location is updated (and tracking is enabled), the new location is broadcasted to other members of the current tracking room.

- **Room Management**: Provides methods to create a new room, join a specified room, leave the current room, and start sharing your location in the room.

### How to Use

1. **Incorporate the Hook**:

   In your component, use the `useTrack` hook:

   ```tsx
   const {
     isConnected,
     messages,
     roomId,
     joinRoom,
     handleLeaveRoom,
     createRoom,
     startTrackMe,
     exitRoom,
     parentLocation,
   } = useTrack();
   ```

2. **Join a Room**:

   To join a room:

   ```tsx
   joinRoom("ROOM_ID_HERE");
   ```

3. **Start Broadcasting Your Location**:

   After joining, you can start broadcasting your location:

   ```tsx
   startTrackMe("ROOM_ID_HERE");
   ```

4. **Leave a Room**:

   When done with tracking, you can leave the room:

   ```tsx
   handleLeaveRoom("ROOM_ID_HERE");
   ```

5. **Create a New Room**:

   If you want to create a new tracking room:

   ```tsx
   createRoom();
   ```

6. **Receive Parent's Location**:

   You can access the parent's location (if available) using:

   ```tsx
   const { latitude, longitude } = parentLocation;
   ```

### Conclusion

The `useTrack` hook offers a comprehensive solution to real-time location tracking in React Native applications. With an easy-to-use interface and real-time capabilities, it ensures seamless location sharing and monitoring, enhancing the user experience and application functionality.
