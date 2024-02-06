// компонент страницы «О проекте»

import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound()
{
  const navigate = useNavigate();

  return (
    <main className='not-found'>
      <h1 className='not-found__text'>
        <span className='not-found__code'>404</span>
        Страница не найдена
      </h1>      
      <button type="button" className='link not-found__link' onClick={() => navigate(-1)}>Назад</button>
    </main>
  );
}

export default NotFound;