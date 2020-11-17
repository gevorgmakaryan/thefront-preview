import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper, CssBaseline } from '@material-ui/core';
import AOS from 'aos';

import theme from './theme';
import Routes from './Routes';


import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'aos/dist/aos.css';

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

const App = () => {
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;