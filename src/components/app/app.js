import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Main from '../page-main/main/main';
import Movies from '../page-movies/movies/movies';
import SavedMovies from '../page-movies/saved-movies/saved-movies';
import Profile from '../profile/profile';
import Register from '../page-auth/register/register';
import Login from '../page-auth/login/login';
import NotFound from '../page-error/not-found';

function App()
{
  // Регистрация
  function signCreate(email, password)
  { }

  // Авторизация
  function signIn(email, password)
  { }  

  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/saved-movies" element={<SavedMovies/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signup" element={<Register onSubmit={signCreate} />} />
      <Route path="/signin" element={<Login onSubmit={signIn} />} />
    
      <Route path="*" element={<NotFound />} />    
    </Routes>
  );
}

export default App;
