// компонент страницы с сохранёнными карточками фильмов
import { useEffect, useState, React } from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import {cards} from '../../../utils/constants';
import More from '../more/more';

function SavedMovies()
{
  useEffect(() => {
    const origFontStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    return () => document.body.style.backgroundColor = origFontStyle;
  }, []);

  const [more, setMore] = useState(<More onClick={moreClick} />);
  const [showingCards, setShowingCards] = useState(cards.slice(0, 12));

  function moreClick()
  {
    setMore(<></>);
    setShowingCards(cards);
  }

  return (
    <main>
      <SearchForm />
      <MoviesCardList 
        cards={showingCards}
      />
      {more}
      <Footer />
    </main>
  );
}

export default SavedMovies;