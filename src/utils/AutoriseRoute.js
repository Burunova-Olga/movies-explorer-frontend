import React from 'react';
import { Navigate } from "react-router-dom";

function AutoriseRouteElement ({ element: Component, ...props  }) 
{
  let loggedIn = JSON.parse(localStorage.getItem('isLogged'));
  if (loggedIn == null) loggedIn = false;

  return (
    !loggedIn ? <Component {...props} /> : <Navigate to="/movies" replace/>
  )
}

export default AutoriseRouteElement;