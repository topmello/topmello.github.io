---
sidebar_position: 8
title: Keyboard Event
---

# Keyboard Event

## `useKeyboardEvent` Hook

React Native offers a rich API set for various device-specific behaviors, one of which is keyboard interactions. Built atop React Native's `Keyboard` API, the `useKeyboardEvent` hook provides a seamless way to track the keyboard's visibility state within the lifecycle of your React components.

### Overview

The `useKeyboardEvent` hook provides an abstraction to listen for keyboard show/hide events and maintain the current visibility state of the keyboard. With this, developers can effortlessly implement responsive designs or functionalities that depend on the keyboard's state.

### Installation

Before diving into the `useKeyboardEvent` hook, ensure that you have `react-native` set up in your project:

```bash
npm install react-native
```

### Usage

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

### Hook Return Values

When you invoke the `useKeyboardEvent` hook, it returns an object containing:

- **keyboardShow (`boolean`):** A boolean indicating the current visibility state of the keyboard. It's `true` when the keyboard is visible and `false` otherwise.

### Under the Hood

Internally, the hook leverages React Native's `Keyboard` API to listen for keyboard visibility events:

- `keyboardDidShow` event updates the state to indicate the keyboard is visible.
- `keyboardDidHide` event updates the state to indicate the keyboard is hidden.

Listeners are cleaned up appropriately to prevent potential memory leaks.

### Best Practices

- Ensure that the `useKeyboardEvent` hook is invoked within the body of a functional React component.
- Utilize the `keyboardShow` state to make UI adjustments, animate components, or change functionalities based on the keyboard's visibility state.