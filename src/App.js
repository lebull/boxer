import React from 'react';
import './App.css';
import BoxerAppBar from './components/BoxerAppBar';
import BoxerBody from './components/BoxerBody';
import Login from './components/account/Login';
import SignUp from './components/account/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <BoxerAppBar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <BoxerBody />
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
