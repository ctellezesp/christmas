import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    ancore: {
        textDecoration: 'none',
        color: 'white'
    }
  }));
  

export default function Menu() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Christmas Party
          </Typography>
          <Link to='/' className={classes.ancore}>
            <Button color="inherit">Letters</Button>
          </Link>
          <Link to='/user' className={classes.ancore}>
            <Button color="inherit">Music</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}