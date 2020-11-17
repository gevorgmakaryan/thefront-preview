**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid, Button, Typography } from "@material-ui/core";
import { Icon } from 'components/atoms';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPricingStandard
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
        <Grid item xs={4}>
            <CardPricingStandard
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
        <Grid item xs={4}>
            <CardPricingStandard
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
    </Grid>
</ThemeProvider>
```

**Outlined Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid, Typography, Button } from "@material-ui/core";
import { Icon } from 'components/atoms';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPricingStandard
                variant="outlined"
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
        <Grid item xs={4}>
            <CardPricingStandard
                variant="outlined"
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
        <Grid item xs={4}>
            <CardPricingStandard
                variant="outlined"
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
    </Grid>
</ThemeProvider>
```

**Custom Shadow and LiftUp Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid, Typography, Button } from "@material-ui/core";
import { Icon } from 'components/atoms';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPricingStandard
                withShadow
                liftUp
                variant="outlined"
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
        <Grid item xs={4}>
            <CardPricingStandard
                withShadow
                liftUp
                variant="outlined"
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
        <Grid item xs={4}>
            <CardPricingStandard
                withShadow
                liftUp
                variant="outlined"
                title="Extended License"
                subtitle="A pay-once license, just for you"
                priceComponent={(
                    <div>
                        <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>
                        <Typography component="span" variant="subtitle1">/ MO</Typography>
                    </div>
                )}
                features={['Rich, responsive landing pages', '100+ styled components', 'Flexible, simple license', 'Speedy build tooling', '6 months free support included']}
                featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}
                cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}
                disclaimer="Fully featured 30-day free trial"
            />
        </Grid>
    </Grid>
</ThemeProvider>
```