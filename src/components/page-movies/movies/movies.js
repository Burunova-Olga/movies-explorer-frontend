// компонент страницы с поиском по фильмам
import React, {useEffect, useState} from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import More from '../more/more';
import Header from '../../header/header';
import Preloader from '../preloader/preloader';
import moviesApi from "../../../utils/MoviesApi";

function Movies({onSearch, addMovie, deleteMovie})
{
  const [isPreloaderShow, setIsPreloaderShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [typeScreen, setTypeScreen] = useState("desktop");
  const [countShowingCards, setCountShowingCards] = useState(12);
  const [isMoreShow, setMoreShow] = useState(false);
  
  // Отслеживание изменения размера
  React.useEffect(() => 
  {    
    var resize;
    function resizer(event)
    { 
      clearTimeout(resize);
      resize = setTimeout(getCountMovies, 500);
    }    
    
    window.addEventListener('resize', resizer);
    
    return () => 
    {
      window.removeEventListener('resize', resizer);
    };
  });
  
  // Количество отображаемых карточек в зависимости от ширины экрана
  function getCountMovies(isNeedUpdate = false)
  {
    console.log(isNeedUpdate + " " + typeScreen + " " + window.innerWidth); 
    if (window.innerWidth > 1279)
    {
      if (typeScreen != "desktop" || isNeedUpdate)
      {
        setTypeScreen("desktop");
        setCountShowingCards(12);
      }
    }
    else if (window.innerWidth > 650) 
    {
      if (typeScreen != "table" || isNeedUpdate)
      {
        console.log("update");
        setTypeScreen("table");
        setCountShowingCards(8);
      }
    }
    else 
    {
      if (typeScreen != "mobile" || isNeedUpdate)
      {
        setTypeScreen("mobile");
        setCountShowingCards(5);
      }
    }    
  }

  // Нужно ли отображение "Ещё"
  useEffect(() =>
  {
    setMoreShow(countShowingCards < cards.length);
  }, [cards, countShowingCards])

  // Открытие дополнительного ряда карточек
  function moreClick() 
  {    
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

  ///////////////////////////////////////////////
  //                    ПОИСК
  ///////////////////////////////////////////////

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

    // Если список всех фильмов пуст - надо сделать запрос
    if (localStorage.getItem('allMovies') === null)
      getAllMovies();
    else 
      filtrMovies();
  }

  function filtrMovies()
  {
    // Фильтр по всем фильмам
    const filtrMovies = onSearch(
      {
        movies: JSON.parse(localStorage.getItem('allMovies')),
        request: localStorage.getItem('request'),
        isShort: JSON.parse(localStorage.getItem('isShortMovies')),
      })

      // Если поиск не дал результатов
      if (filtrMovies.length === 0)
        document.querySelector('.found-error').classList.add('error_visible');

      localStorage.setItem('foundMovies', JSON.stringify(filtrMovies));
      setCards(filtrMovies);
      getCountMovies(true);    
  }

  // Запрос фильмов от api
  function getAllMovies()
  {
    setIsPreloaderShow(true);
    moviesApi.getMovies()
      .then((data) =>
      {
        localStorage.setItem('allMovies', JSON.stringify(data));
        filtrMovies();
      })
      .catch((err) =>
      {
        document.querySelector('.server-error').classList.add('error_visible');
      })
      .finally(() =>
      {
        setIsPreloaderShow(false);
      });  
  }

  // При загрузке страницы
  useEffect(() =>
  {    
    // Если в хранилище есть результаты поиска
    if (localStorage.getItem('foundMovies') != null)
    {
      document.querySelector('.found-error').classList.remove('error_visible');
      document.querySelector('.server-error').classList.remove('error_visible');
      
      const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
      setCards(foundMovies);

      // Если поиск не нулевой, а пустой
      if (foundMovies.length === 0)
        document.querySelector('.found-error').classList.add('error_visible');
    }

    // Если есть сохранённый запрос - считаем его отправленным
    else if (localStorage.getItem('isShortMovies') != null &&
        localStorage.getItem('request') != null )
      {
        getMovies();        
      }
  
    getCountMovies();
  }, [])

  console.log(countShowingCards);
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm onSubmit={updateRequest} request={ localStorage.getItem('request')}/>
        {isPreloaderShow && <Preloader />}
        <p className="error found-error">Ничего не найдено</p>
        <p className="error server-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
          Подождите немного и попробуйте ещё раз
        </p>
        <MoviesCardList 
          cards={cards}
          countShowingCards={countShowingCards}
          addMovie={addMovie} 
          deleteMovie={deleteMovie}
        />
        {isMoreShow && <More onClick={moreClick} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
