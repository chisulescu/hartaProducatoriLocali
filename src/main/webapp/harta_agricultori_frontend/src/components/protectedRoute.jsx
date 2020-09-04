import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute ({authed, ...rest}) {
    console.log(authed);
    return (
      <Route
        {...rest}
        render={(props) => <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }

export default ProtectedRoute;