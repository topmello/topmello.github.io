---
sidebar_position: 2
---

# Styling

## Theme Colors

<iframe src="/colors.html" height="600px" width="100%" />

## Accessing theme properties

Use the custom `useAppTheme()` hook to access to the theme variables. This hook extends React Native Paper hook and add custom colors like success and amber.
```js
import * as React from 'react';
import { useAppTheme } from "../../theme/theme";

export default function PaymentScreen() {
  const theme = useTheme();

  return <View style={{ backgroundColor: theme.colors.purpleContainer }} />;
}
``` 

## Accessing Dark mode
Using the custom `useAppTheme()` hook and use its dark boolean property
```js
import * as React from 'react';
import { useAppTheme } from "../../theme/theme";

export default function PaymentScreen() {
  const {dark} = useTheme();
  return <View style={{ fontWeight: dark? '800':'600' }} />;
}
```