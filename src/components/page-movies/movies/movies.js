// компонент страницы с поиском по фильмам

import { useState, React } from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import { cards } from '../../../utils/constants';
import More from '../more/more';
import Header from '../../header/header';

function Movies()
{
  const [more, setMore] = useState(<More onClick={moreClick} />);
  const [showingCards, setShowingCards] = useState(cards.slice(0, 5));

  function moreClick()
  {
    setMore(<></>);
    setShowingCards(cards);
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList
          cards={showingCards}
        />
        {more}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
