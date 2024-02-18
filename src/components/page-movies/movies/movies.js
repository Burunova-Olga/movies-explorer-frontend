// компонент страницы с поиском по фильмам
import React, {useEffect, useState} from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import More from '../more/more';
import Header from '../../header/header';
import Preloader from '../preloader/preloader';
import moviesApi from "../../../utils/MoviesApi";
import mainApi from "../../../utils/MainApi";

function Movies({onSearch})
{
  const [isPreloaderShow, setIsPreloaderShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [typeScreen, setTypeScreen] = useState("desktop");
  const [countShowingCards, setCountShowingCards] = useState(12);
  const [isMoreShow, setMoreShow] = useState(false);

  // При загрузке страницы
  useEffect(() =>
  {    
    // Если есть сохранённый запрос - считаем его отправленным
    if (localStorage.getItem('isShortMovies') != null &&
        localStorage.getItem('request') != null )
      {
        getMovies();        
      }

    getCountMovies();
  }, [])

  // Количество отображаемых карточек в зависимости от ширины экрана
  function getCountMovies()
  {
    if (window.innerWidth > 1279)
    {
      if (typeScreen != "desktop")
      {
        setTypeScreen("desktop");
        setCountShowingCards(12);
      }
    }
    else if (window.innerWidth > 650) 
    {
      if (typeScreen != "table")
      {
        setTypeScreen("table");
        setCountShowingCards(8);
      }
    }
    else 
    {
      if (typeScreen != "mobile")
      {
        setTypeScreen("mobile");
        setCountShowingCards(5);
      }
    }    
  }
  
  // Событие отслеживания изменения экрана
  var resize;
  window.addEventListener('resize', (e) =>
  {
    clearTimeout(resize);
    resize = setTimeout(getCountMovies, 500);
  });

  // Нужно ли отображение "Ещё"
  useEffect(() =>
  {
    setMoreShow(countShowingCards < cards.length);
  }, [cards, countShowingCards])


  // Пользователь прислал новый запрос
  function updateRequest({request, isShortMovies})
  {
    localStorage.setItem('isShortMovies', isShortMovies);
    localStorage.setItem('request', request);
    getMovies();
  }

  // Запрос фильмов от сервера
  function getMovies()
  {
    document.querySelector('.found-error').classList.remove('error_visible');
    document.querySelector('.server-error').classList.remove('error_visible');

    setIsPreloaderShow(true);
    moviesApi.getMovies()
      .then((moviesData) =>
      {
        const filtrMovies = onSearch(
        {
          movies: moviesData,
          request: localStorage.getItem('request'),
          isShort: JSON.parse(localStorage.getItem('isShortMovies')),
        })

        // Если поиск не дал результатов
        if (filtrMovies.length === 0)
          document.querySelector('.found-error').classList.add('error_visible');

        setCards(filtrMovies);
      })
      .catch((err) =>
      {
        document.querySelector('.server-error').classList.add('error_visible');
      })
      .finally(() =>
      {
        setIsPreloaderShow(false);
      })
  }

  // Открытие дополнительного ряда карточек
  function moreClick() 
  {
    console.log(typeScreen);
    
    let delta = 0;
    switch (typeScreen)
    {
      case 'desktop':
        delta = 3;
        break;

      case 'table':
        delta = 2;
        break;

      case 'mobile':
        delta = 2;
        break;
    }

    setCountShowingCards(countShowingCards + delta);
  }

  // Пользователь сохранил фильм
  function onLike({movie})
  {
    mainApi.addNewCard({movie})
      .then((moviesData) =>
      {
      })
      .catch((err) => 
      {
        // setServerError(err.message);
      })
      .finally(() =>
      {
        setIsPreloaderShow(false);
      })  
  }

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm onSubmit={updateRequest}/>
        {isPreloaderShow && <Preloader />}
        <p className="error found-error">Ничего не найдено</p>
        <p className="error server-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
          Подождите немного и попробуйте ещё раз
        </p>
        <MoviesCardList 
          cards={cards}
          countShowingCards={countShowingCards}
          onLike={onLike} 
        />
        {isMoreShow && <More onClick={moreClick} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
