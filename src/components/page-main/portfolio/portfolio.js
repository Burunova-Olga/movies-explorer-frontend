// компонент со ссылками на другие проекты

import React from 'react';

function Portfolio()
{
  return (
    <>
      <h3 className='portfolio'>Портфолио</h3>
      <ul className='portfolio__projects'>
        <li><a target="_blank" href="https://github.com/Burunova-Olga/how-to-learn" className="link project__link project__link_underline"> 
          <p className="project__text">Статичный сайт</p>
          <p className="project__text">↗</p>
        </a></li>
        <li><a target="_blank" href="https://github.com/Burunova-Olga/russian-travel" className="link project__link project__link_underline">
          <p className="project__text">Адаптивный сайт</p>
          <p className="project__text">↗</p>
        </a></li>
        <li><a target="_blank" href="https://github.com/Burunova-Olga/react-mesto-api-full-gha" className="link project__link">            
          <p className="project__text">Одностраничное приложение</p>
          <p className="project__text">↗</p>
        </a></li>
      </ul>
    </>
  );
}

export default Portfolio;