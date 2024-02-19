import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import ProtectedRouteElement from "../../utils/ProtectedRoute";
import AutoriseRouteElement from "../../utils/AutoriseRoute";
import Main from '../page-main/main/main';
import Movies from '../page-movies/movies/movies';
import SavedMovies from '../page-movies/saved-movies/saved-movies';
import Profile from '../page-profile/page-profile';
import Register from '../page-auth/register/register';
import Login from '../page-auth/login/login';
import NotFound from '../page-error/not-found';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ServerErrorContext } from '../../contexts/ServerErrorContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

import auth from "../../utils/Auth";
import mainApi from "../../utils/MainApi";

function App()
{  
  const navigate = useNavigate();

  const [serverError, setServerError] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState(
  {
    name: 'Жак-Ив Кусто',
    email: 'admin@test.ru'
  });

  /////////////////////////////////////////////////////
  //                      USER  
  /////////////////////////////////////////////////////

  // Проверка на авторизованного пользователя
  useEffect(() =>
  {
    const token = localStorage.getItem('token');
    if (token)
    {
      auth.checkToken(token)
      .then((res) =>
      {     
        if (res) 
        {
          setCurrentUser(
          {
            name: res.message.name, 
            email: res.message.email
          });
          localStorage.setItem('isLogged', JSON.stringify(true));
          getSavedMovies();
        }
      })
      .catch((err) => 
      {
        setServerError(err.message);
      });
    }
  }, [localStorage.getItem('token')])
  
  // Регистрация
  function signCreate(email, password, name)
  { 
    setServerError('');
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
    setServerError('');
    auth.authorize(email, password)
      .then((data) =>
      {
        if (data.token)
        {
          setCurrentUser(data);
          navigate("/movies", {replace: true})
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
    localStorage.removeItem('isLogged');  
    localStorage.removeItem('isShortMovies'); 
    localStorage.removeItem('request');
    localStorage.removeItem('foundMovies');  
    setSavedMovies([]);
    setCurrentUser({name: '', email: ''});
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

  /////////////////////////////////////////////////////
  //                     MOVIES  
  /////////////////////////////////////////////////////
  // Запрос фильмов 
  function onSearch({movies, request, isShort})
  {
    const filtrMovies = [];
    movies.forEach((item) =>
    {
      if (item.nameRU.toLowerCase().includes(request.toLowerCase()) || 
          item.nameEN.toLowerCase().includes(request.toLowerCase()))
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
        console.log(data);
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
    <SavedMoviesContext.Provider value={savedMovies}> 
      <Routes>
        <Route path="/" element={<Main/>} />

        <Route path="/movies" element=
          {<ProtectedRouteElement 
          element={Movies} 
          onSearch={onSearch} 
          addMovie={addMovie} 
          deleteMovie={deleteMovie}
          />} 
        />

        <Route path="/saved-movies" element=
          {<ProtectedRouteElement 
            element={SavedMovies} 
            onSearch={onSearch} 
            deleteMovie={deleteMovie}
          />} 
        />

        <Route path="/profile" element=
          {<ProtectedRouteElement 
          element={Profile} 
          signOut={signOut} 
          onSubmit={changeProfile}
          />} 
        />

        <Route path="/signup" element=
          {<AutoriseRouteElement 
          element={Register} 
          onSubmit={signCreate}
          />} 
        />
        <Route path="/signin" element=
          {<AutoriseRouteElement 
          element={Login} 
          onSubmit={signIn}
          />}
        />

        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </SavedMoviesContext.Provider> 
    </ServerErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
