import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

// import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
    <AppBar position="static" className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Questionnaire App
      </Typography>
    </AppBar>

    {/* <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      onClick={handleClick}
      disabled={!isSubmitButtonAnabled}
    >
      次へ
  </Button> */}
  </div>
  );
}