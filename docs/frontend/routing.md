---
sidebar_position: 3
title: Routing
---

# Routing

In the realm of mobile applications developed with Expo, routing plays a pivotal role in sculpting the user experience. Think of routing as the unseen conductor of an orchestra, seamlessly guiding users through different sections of an app, ensuring smooth transitions, efficient data passage, and intuitive backtracking. It's the backbone of navigation, shaping how users interact with the application's features and content. Without effective routing, even the most feature-rich applications can become unnavigable mazes, diminishing user engagement and satisfaction. Thus, for any application to be truly user-centric, a robust and efficient routing mechanism is indispensable.

## Route Graph

Please refer to the Prototype view of project's figma high fidelity design prototype

## Imperative Routing

### Navigation with `router.push`
The `router.push` method is your go-to function for programmatically navigating to different screens or routes in your application.

```javascript
router.push(routeName, params);
```
* `routeName` (string): The name of the route/screen you wish to navigate to.
* `params` (object, optional): Any parameters or data you want to pass to the next route.

### Navigate Back with `router.back`
Navigating back to the previous screen is as simple as it sounds. Use the `router.back` function to pop the current screen off the navigation stack and return to the screen you were on before.

```javascript
router.back();
```
## Conclusion
The essence of a great app lies in its navigation fluidity. With Expo Router and the power of router.push and router.back, you have the tools you need to create an impeccable and seamless user journey. Dive in and let your app's navigation flow!