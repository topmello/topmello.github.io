---
sidebar_position: 1
title: Introduction
---
# Frontend Design Introduction

In the realm of frontend development, a performant and responsive user interface is paramount. Why? The frontend serves as the primary interaction point for users and often shapes the entirety of their experience.  
With React Native at the core of our tech stack, developers can harness the power of a cross-platform solution, ensuring consistent behavior and appearance across Android and iOS platforms.  

<img src="/img/showcase-min.gif" style={{height:500}} />

## Key Features

**Cross-Platform Development**: With React Native, the app is developed once but can run on both Android and iOS. This makes for a cost-efficient development process, which our target audience values.

**Unified UI/UX**: React Native Paper ensures that the app maintains UI consistency across devices, resulting in a cohesive user experience.

**High-Performance API Calls**: Axios simplifies making API requests and handles them efficiently hence improve the user experience.

**Centralized State Management**: Redux offers a structured way to manage the app's global state, ensuring that components receive consistent data, which will be benifitial for collaboration between team members and future extension of the application functionailities.

**Persistent Data Storage**: With Redux Persist, the app's state data can survive app restarts, enhancing user experience.

**Multi-Language Support**: React i18next ensures that the app can be localized in various languages, which is critical for us to provide service to our target audience.

**Geolocation Services**: Expo Location and React Native Maps enable the app to offer map and location-based features. This adaption allows us to do realtime location sharing.

**Real-time Interaction**: Chat and updates in real-time which is built upon WebSocket protocol.

**Advanced Device Integration**: Direct calendar interaction, print capabilities and more.

## Technology Stack

Frontend Tech stack we use:

- [React Native](https://reactnative.dev/) - Fundamental Framework to build native app for Android and iOS in React
- [React Native Paper](https://reactnativepaper.com/) - UI component and theme library for UI consistency accross devices
- [React Native Dates](https://web-ridge.github.io/react-native-paper-dates/docs/intro) - Date selector component for React Native Paper
- [Expo Router](https://docs.expo.dev/routing/introduction/) - Routing between screens
- [Axios](https://axios-http.com/docs/intro) - API request library
- [Redux](https://redux.js.org/) - Global state management for React app
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Data persistance for Redux
- [React i18next](https://react.i18next.com/) - Internalization for React
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) - Providing access to Geolocation
- [React Native Maps](https://www.npmjs.com/package/react-native-maps?activeTab=readme) - Cross-platform map component

🆕 New In Iteration 2
- [Expo Calendar](https://docs.expo.dev/versions/latest/sdk/calendar/) - Provides an API for interacting with the device's system calendars
- [Expo KeepAwake](https://docs.expo.dev/versions/latest/sdk/keep-awake/) - A React component that prevents the screen from sleeping when rendered.
- [Expo Localization](https://docs.expo.dev/versions/latest/sdk/localization/) - A library that provides an interface for native user localization information.
- [Expo Print](https://docs.expo.dev/versions/latest/sdk/print/) - A library that provides printing functionality for Android and iOS (AirPrint).
- [React Native Share](https://reactnative.dev/docs/share) - Provide access to system share API
- [Socket.io Client](https://www.npmjs.com/package/socket.io-client) - For realtime messaging