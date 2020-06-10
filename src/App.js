import React from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import {Route,Switch} from 'react-router-dom'
import Login from './routers/login/index'
// import Login from './routes/Login2/index'
import Index from './routers/index/index'
import './App.css';


function App() {
  return (
    <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Index}/>
    </Switch>
  );
}

export default App;
