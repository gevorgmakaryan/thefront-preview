```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionAlternate>This is alternative section</SectionAlternate>
</ThemeProvider>