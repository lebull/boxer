import React from 'react';
import './App.css';
import BoxerAppBar from './components/BoxerAppBar';
import BoxerBody from './components/BoxerBody';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <BoxerAppBar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <BoxerBody />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
