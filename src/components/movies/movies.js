// компонент страницы с поиском по фильмам

import React from 'react';

import SearchForm from '../search-form/search-form';

function Movies()
{
  return (
    <main className='movies'>
      <SearchForm />
    </main>
  );
}

export default Movies;