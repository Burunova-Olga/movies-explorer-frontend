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
  const [serverError, setServerError] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  /////////////////////////////////////////////////////
  //                      USER  
  /////////////////////////////////////////////////////
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: 'Жак-Ив Кусто',
      email: 'admin@test.ru',
      loggedIn: false
    });

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

  // Запрос информации о пользователе
  function askAboutMe(token)
  {
    auth.checkToken(token)
      .then((res) =>
      {     
        if (res) 
        {
          setCurrentUser(
          {
            name: localStorage.getItem('userName'), 
            email: localStorage.getItem('userEmail'),
            loggedIn: true
          });

          getSavedMovies();
        }

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
    localStorage.removeItem('isShortMovies'); 
    localStorage.removeItem('request');
    localStorage.removeItem('savedMovies'); 
    localStorage.removeItem('foundMovies'); 
    setCurrentUser({name: '', email: '', loggedIn: false});
    navigate("/signin");
  }

  // Изменение профиля
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

  /////////////////////////////////////////////////////
  //                     MOVIES  
  /////////////////////////////////////////////////////
  // Запрос фильмов 
  function onSearch({movies, request, isShort})
  {
    const filtrMovies = [];
    movies.forEach((item) =>
    {
      if (item.nameRU.includes(request) || item.nameEN.includes(request))
      {                
        if (isShort)
        {
          if (item.duration < 40)
            filtrMovies.push(item);
        }
        else 
          filtrMovies.push(item);
      }
    });
    return filtrMovies;
  }
  
  // Запрос сохранённых фильмов
  function getSavedMovies()
  {
    mainApi.getMovies()
      .then((data) =>
      {
        localStorage.setItem('savedMovies', JSON.stringify(data));
        setSavedMovies(data);
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
  }

  // Пользователь сохранил фильм
  function addMovie({movie})
  {
    mainApi.addNewCard({movie})
      .then((data) =>
      {
        getSavedMovies();
      })
      .catch((err) => 
      {
        setServerError(err.message);
      })
  }

  // Пользователь удалил фильм
  function deleteMovie(movieId)
  {
    mainApi.deleteCard(movieId)
      .then((data) =>
      {        
        getSavedMovies();
      })
      .catch((err) => 
      {
        setServerError(err.message);
      }) 
  }


  /////////////////////////////////////////////////////
  //                     ROUTES  
  /////////////////////////////////////////////////////
  return (
    <CurrentUserContext.Provider value={currentUser}>  
    <ServerErrorContext.Provider value={serverError}>      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies onSearch={onSearch} savedMovies={savedMovies} addMovie={addMovie} deleteMovie={deleteMovie}/>} />
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