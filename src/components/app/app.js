import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import Main from '../page-main/main/main';
import Movies from '../page-movies/movies/movies';
import SavedMovies from '../page-movies/saved-movies/saved-movies';
import Profile from '../page-profile/page-profile';
import Register from '../page-auth/register/register';
import Login from '../page-auth/login/login';
import NotFound from '../page-error/not-found';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ServerErrorContext } from '../../contexts/ServerErrorContext';

import auth from "../../utils/Auth";
import mainApi from "../../utils/MainApi";

function App()
{  
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: 'Жак-Ив Кусто',
      email: 'admin@test.ru'
    });

  const [loggedIn, setLoggedIn] = useState(false);

  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  function setLogin(isLogin, userName, userEmail)
  {
    setLoggedIn(isLogin);
    setCurrentUser({name: userName, email: userEmail});
  }

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
          askAboutMe(data.token);
          navigate("/movies", {replace: true})
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
  }  

  function askAboutMe(token)
  {
    auth.checkToken(token)
      .then((res) =>
      {     
        if (res)
          setLogin(true, localStorage.getItem('userName'), localStorage.getItem('userEmail'));
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
  }

  // Разавторизация
  function signOut()
  {
    localStorage.removeItem('token');   
    localStorage.removeItem('userName'); 
    localStorage.removeItem('userEmail'); 
    setLogin(false, '', '');
    navigate("/signin");
  }

  function changeProfile(newName, newEmail)
  {
    setServerError('');
    mainApi.setUserInfo(newName, newEmail)
      .then((result) =>
      {
        setCurrentUser(result);
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
  }

  // Проверка на авторизованного пользователя
  useEffect(() =>
  {
    if (localStorage.getItem('token'))
    {
      const token = localStorage.getItem('token');
      askAboutMe(token);
    }
  }, [localStorage.getItem('token')])

  return (
    <CurrentUserContext.Provider value={currentUser}>  
    <ServerErrorContext.Provider value={serverError}>      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/saved-movies" element={<SavedMovies/>} />
        <Route path="/profile" element={<Profile signOut={signOut} onSubmit={changeProfile}/>} />
        <Route path="/signup" element={<Register onSubmit={signCreate}/>} />
        <Route path="/signin" element={<Login onSubmit={signIn}/>} />
      
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </ServerErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
/*

*/