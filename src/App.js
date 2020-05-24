import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        Boxer
      </Typography>
      <Typography variant="h2" component="h2">
        Goal
      </Typography>
      <Typography variant="p" component="p">
        Using the fitbit api (or whatever else can be throw in), compare weight progress over a set time.
      </Typography>
    </div>
  );
}

export default App;
