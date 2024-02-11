import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import Main from '../page-main/main/main';
import Movies from '../page-movies/movies/movies';
import SavedMovies from '../page-movies/saved-movies/saved-movies';
import Profile from '../page-profile/page-profile';
import Register from '../page-auth/register/register';
import Login from '../page-auth/login/login';
import NotFound from '../page-error/not-found';

import auth from "../../utils/Auth";

function App()
{  
  const [loggedIn, setLoggedIn] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  // Регистрация
  function signCreate(email, password, name)
  { 
    auth.register(email, password, name)
      .then((res) =>
      {
        if (!res.error)
          signIn(email, password);
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
  }

  // Авторизация
  function signIn(email, password)
  {
    auth.authorize(email, password)
      .then((data) =>
      {
        if (data.token)
        {            
          setLoggedIn(true);
          navigate('/movies', {replace: true});
        }
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
  }  

  const userInfo = 
  {
    name: "Виталий",
    email: "pochta@yandex.ru"
  }

  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/saved-movies" element={<SavedMovies/>} />
      <Route path="/profile" element={<Profile user={userInfo}/>} />
      <Route path="/signup" element={<Register onSubmit={signCreate} serverError={serverError}/>} />
      <Route path="/signin" element={<Login onSubmit={signIn} serverError={serverError}/>} />
    
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default App;
/*

*/