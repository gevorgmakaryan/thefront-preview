import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {},
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  listItem: {
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
}));

const Topbar = props => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src="/images/logos/logo.svg"
            alt="thefront"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/home"
            >
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/signup-simple"
            >
              Sign up
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/not-found"
            >
              Error Page
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="https://material-ui.com/store/items/the-front-landing-page/"
              className={classes.listItemButton}
            >
              Full Product
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
