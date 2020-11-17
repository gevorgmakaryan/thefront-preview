**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
    />
</ThemeProvider>
```

**Highlighted Title Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        title={<span>We are reimagining renting to help you <Typography color="secondary" variant="inherit" component="span">achieve your dreams</Typography></span>}
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
    />
</ThemeProvider>
```

**Aligned Left and with FadeUp**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
        align="left"
        fadeUp
    />
</ThemeProvider>
```

**Only Title**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
    />
</ThemeProvider>
```

**With CTAs**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        title="We are reimagining renting to help you achieve your dreams"
        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
    />
</ThemeProvider>
```

**With DOM Title and Subtitle**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        title={<>Find a job you love.<a href="#"> Learn more</a></>}
        subtitle={<>Try it now.<a href="#"> Learn more</a></>}
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
    />
</ThemeProvider>
```

**With Label**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        label="our process"
        title={<>Find a job you love.<a href="#"> Learn more</a></>}
        subtitle={<>Try it now.<a href="#"> Learn more</a></>}
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
    />
</ThemeProvider>
```

**With Overline**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Image } from '../../atoms';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SectionHeader
        overline={<Image src="/images/illustrations/rated-by-our-customer.png" alt="rating" style={{ width: 120, height: 'auto' }} width="auto" />}
        title="Rated 5 out of 5 stars by our customers!"
        subtitle="Companies from across the globe have had fantastic experiences using TheFront. Here’s what they have to say."
        ctaGroup={[(
            <Button color="primary" variant="contained">Submit</Button>
        ), (
            <Button color="primary" variant="outlined">Learn More</Button>
        )]}
    />
</ThemeProvider>
