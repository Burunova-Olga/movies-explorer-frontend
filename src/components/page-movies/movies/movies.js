// компонент страницы с поиском по фильмам

import { useState, React } from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import More from '../more/more';
import Header from '../../header/header';
import Preloader from '../preloader/preloader';

function Movies({cards, onSearch, preloaderVisible})
{
  const [more, setMore] = useState(<More onClick={moreClick} />);
 // const [showingCards, setShowingCards] = useState(cards.slice(0, 5));
  const [showingCards, setShowingCards] = useState(cards);

  function moreClick()
  {
    setMore(<></>);
    setShowingCards(cards);
  }

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm onSubmit={onSearch}/>
        {preloaderVisible && <Preloader />}
        <MoviesCardList cards={cards} />
        {more}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
