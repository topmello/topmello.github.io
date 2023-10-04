---
sidebar_position: 4
title: Fetch Data
---
# Fetch Data

## `useFetch` Hook

Just as React provides hooks to embed state and other React features into your components, `useFetch` serves as a custom hook that provides an abstraction over the fetching mechanism, tailored to work efficiently within the React component lifecycle.

### Overview

The `useFetch` hook is designed to interact with your API, handle various kinds of errors, and provide feedback to the user. It seamlessly integrates with your Redux store to maintain application state and utilizes other hooks for notifications, translations, and session management.

### Installation

Before you can use the `useFetch` hook, ensure you have the necessary dependencies:

```bash
npm install react react-redux axios react-i18next expo-router
```

### Usage

Here's a basic way to use the `useFetch` hook:

```jsx
const [data, fetchData] = useFetch(requestOptions);
```

#### Parameters

- **requestOptions (`RequestOptions`):** This is the main configuration for your fetch request. It includes all the details needed to make an API call.
- **deps (`any[]` = []):** Dependencies for the effect. The fetch operation will re-run whenever these dependencies change.
- **initialData (`T`):** You can provide an initial value for the data. Useful in scenarios where you have default or placeholder data.
- **shouldFetchImmediately (`boolean` = true):** A boolean indicating if the fetch should run immediately when the component mounts.
- **notificationMsg (`string`):** A message to display as a notification when the fetch is successful.

#### Returns

The hook returns an array with:

1. The fetched data (`T | null`)
2. A `fetchData` function to trigger the fetch manually.

### Deep Dive

#### Session Validity

Before making the fetch, the hook checks the validity of the user session. If the session is invalid, it will dispatch a "Session Invalid" error to your Redux store.

#### Handling Errors

The hook comes with an integrated error-handling mechanism. If the fetch encounters an error, the hook identifies its type and dispatches appropriate actions or notifications. Some of the handled errors include:

- Network Error
- Unknown Error
- Invalid Credentials
- No Location
- Already Voted

It's designed to give feedback both to your Redux store and the user via notifications.

#### Notifications & Translations

The hook leverages the `useNotification` and `useTranslation` hooks to send user notifications and support internationalization respectively.

### Best Practices

- Always ensure the `requestOptions` provided are valid and are in the expected format.
- Be cautious about the dependencies (`deps`) you provide. Too many or irrelevant dependencies could lead to unnecessary fetches.
- To ensure the user gets feedback, always provide meaningful `notificationMsg` strings.