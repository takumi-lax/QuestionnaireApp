import React from 'react';
import './App.css';
import MyRouter from './components/MyRouter';
import HeaderBar from './components/HeaderBar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "grid",
    "grid-template-rows": "1fr 20fr",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderBar/>
      <MyRouter/>
    </div>
  );
}

export default App;