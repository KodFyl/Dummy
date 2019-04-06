import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import store from './Store'
import Main from './components/signedOut/Main'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/signedIn/Dashboard'
import Registered from './components/Registered'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>  
          <div className="App">
            <NavBar />
            <Switch>  
              <Route exact path='/' component={ Main } />
              <Route exact path='/dashboard' component={ Dashboard } />
              <Route exact path='/registered' component={ Registered } />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
