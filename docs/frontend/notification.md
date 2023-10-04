---
title: Notification
sidebar_position: 6
---
# Notification

The implementation of global notifications is paramount for a seamless user experience. Not only do they ensure that users are constantly updated with relevant information and feedback, but they also provide a robust mechanism for error handling. When unexpected issues arise, gracefully presented notifications can guide users, preventing confusion and bolstering trust in the app's reliability and professionalism.

## Introduction

The `NotificationContext.tsx` module is designed to provide an easy and consistent way to handle notifications in your React application using the react-native-paper library. It establishes a context for notifications, allows for notification messages with different severity levels, and provides the utility to dismiss or take action on a notification.  

`useNotification` custom hook provide a gateway to easy push notification to users. It returns an object containing the `pushNotification` method detailed below.

## Data Types

### `Notification`

This is the structure of a notification:

- `message`: The core message of the notification.
- `type`: The severity type of the notification. It could be one of the following values:
  - `success`
  - `error`
  - `warning`
  - `info`
- `timeout`: The duration for which the notification will be displayed. Default is `4000` ms.
- `onDismiss`: A callback function that will be called when the notification is dismissed.
- `action`: An optional action that the user can take on the notification. It consists of:
  - `label`: The text that is displayed for the action.
  - `onPress`: A callback function that will be executed when the action is taken.

### `NotificationContextType`

This defines the shape of the context:

- `notification`: The current active notification.
- `pushNotification`: A function to show a new notification.
- `clearNotification`: A function to clear the active notification.

## `NotificationContext`

This is the main context that consumers will use to access the current notification and the functions to manipulate it. The context's default value is `undefined`.

## `NotificationProvider`

This component wraps around your application or a part of it and provides the `NotificationContext` to its children.

The `NotificationProvider` maintains the current notification state, handles the logic for automatically dismissing a notification after its timeout, and renders the actual `Snackbar` component from the `react-native-paper` library to display the notification.

## Custom Hook: `useNotification`

The `useNotification` hook is a custom hook designed to provide easy access to the NotificationContext from any component within your React Native application.

```tsx
import { useContext } from "react";
import { NotificationContext } from "../store/NotificationContext";

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
```
By using the `useNotification` hook in your components, you can effortlessly interact with the notification system. It fetches the current notification context, ensuring that it's being accessed within the bounds of the `NotificationProvider`. If not, it throws a useful error to remind developers of the proper usage.

To leverage the capabilities of the notification system in any component:

```tsx
const { pushNotification } = useNotification();

// in an event handler or somewhere
pushNotification({
  message: 'This is a success message!',
  type: 'success'
});
```