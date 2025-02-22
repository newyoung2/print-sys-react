import React from 'react'
import { Route, Redirect, } from 'react-router-dom'  

const PrivateRoute = ({component: Component, ...rest}) => {
   
  return (<Route {...rest} render={(props) => (
    
    React.$utils.getToken() == 'true'? <Component {...props} />: <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>)
    }

export default PrivateRoute