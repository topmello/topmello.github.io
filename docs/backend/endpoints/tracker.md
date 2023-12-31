# Tracker

This module allow user to create room in sockerIO and let other user join.

## Endpoint

### **Generate Room PIN**

- **URL**: `/track/generate-pin/`
- **Method**: `GET`
- **Description**: 
  This endpoint is designed to generate a unique 6-digit room PIN that is used to identify tracking rooms. Once generated, this PIN is stored in a Redis database with a default expiration time of 30 minutes. Users need to be logged in to generate a room PIN.

- **Response**: 
  A JSON object containing the generated room PIN. The structure of the response is represented by the `schemas.TrackRoomOut` model, which primarily consists of the `room_id` attribute, indicating the generated PIN.

## Events

### Connect

- Description: Activated when a client attempts to connect.
- Requirements: A JWT token is mandatory to establish a connection.
- Failure: If the JWT token is missing or invalid, the client will be automatically disconnected.
- API_URL=https://api.settle-aid.tech
- SOCKET_PATH=/track-sio/sio/
- Examples:

```
newSocket = io(process.env.REACT_APP_API_URL, {
      path: process.env.REACT_APP_SOCKET_PATH,
      transportOptions: {
        polling: {
          extraHeaders: {
            'Authorization':`Bearer ${token}`
  }
  }
  }
  })
```

### Disconnect

- Description: Activated when a client disconnects. The event logs the disconnection details.

### Join Room

- Description: Activated when a client wishes to join a room. The client should emit a message to the `join_room` event with the roomId included in the message.
- Validation: The system will verify if the room exists or if it has expired.
- Expiration: Rooms have a lifespan of 30 minutes.

### Leave Room

- Description: Activated when a client decides to leave a room. The client should emit a message to the `leave_room` event with the roomId included in the message.

### Move

- Description: Activated when a message is sent to the `move` event.
- Message Format: The message should adhere to the following structure: { lat: float, long: float, roomId: string }.
- Failure: If the message format is incorrect, an error message will be emitted to the `error` message type.
