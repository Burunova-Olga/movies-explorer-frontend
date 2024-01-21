import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Main from '../main/main';
import Movies from '../movies/movies';
import SavedMovies from '../saved-movies/saved-movies';
import Profile from '../profile/profile';
import Register from '../register/register';
import Login from '../login/login';

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
    </Routes>
  );
}

export default App;
