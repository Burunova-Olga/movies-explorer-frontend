// компонент со ссылками на другие проекты

import React from 'react';

function Portfolio()
{
  return (
    <>
      <h3 className='portfolio'>Портфолио</h3>
      <ul className='portfolio__projects'>
        <li className="project">
          <p className="project__name">Статичный сайт</p>
          <a target="_blank" href="https://github.com/Burunova-Olga/how-to-learn" className="project__link">↗</a>          
        </li>
        <li className="project">
          <p className="project__name">Адаптивный сайт</p>
          <a target="_blank" href="https://github.com/Burunova-Olga/russian-travel" className="project__link">↗</a>
        </li>
        <li className="project">
          <p className="project__name">Одностраничное приложение</p>
          <a target="_blank" href="https://github.com/Burunova-Olga/react-mesto-api-full-gha" className="project__link">↗</a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;