```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Section>This is section with default padding</Section>
</ThemeProvider>