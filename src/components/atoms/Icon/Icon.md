```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Icon fontIconClass="fas fa-users" fontIconColor={colors.pink[50]} />
        <Icon fontIconClass="far fa-address-book" size="small" fontIconColor={colors.purple[500]} />
        <Icon fontIconClass="fab fa-angellist" size="medium" fontIconColor={colors.blue[500]} />
        <Icon fontIconClass="fas fa-phone-alt" size="large" fontIconColor={colors.green[500]} />
    </div>
</ThemeProvider>