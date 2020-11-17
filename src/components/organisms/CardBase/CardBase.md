**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardBase>
        <Typography variant="h6">This is basic card</Typography>
    </CardBase>
</ThemeProvider>
```

**Custom Shadow Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardBase withShadow>
        <Typography variant="h6">This is basic card with custom shadows</Typography>
    </CardBase>
</ThemeProvider>
```

**LiftUp Effect Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardBase withShadow liftUp>
        <Typography variant="h6">This is basic card will lift up on hover</Typography>
    </CardBase>
</ThemeProvider>
```

**Basic Card with No Border and No Shadow Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardBase noBorder noShadow>
        <Typography variant="h6">This is basic card without border and without shadow</Typography>
    </CardBase>
</ThemeProvider>
```

**Basic Card with Outlined Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardBase variant="outlined">
        <Typography variant="h6">This is basic card with outlined effect</Typography>
    </CardBase>
</ThemeProvider>
```