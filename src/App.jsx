import React, {Component} from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from "./components/home"
import Login from "./components/login"
import Register from "./components/register"

class App extends Component {
  render(){
    return (
      <HashRouter>
        <>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </>  
    </HashRouter> 
    )
  }
}


export default App;
