// компонент со ссылками на другие проекты

import React from 'react';

function Portfolio()
{
  return (
    <div className='portfolio'>
      <h3 className='portfolio__header'>Портфолио</h3>
      
      <ul className='portfolio__projects'>
        <li className='project'>
          <a target="_blank" href="https://github.com/Burunova-Olga/how-to-learn" className="link project__link"> 
            <p className="project__text">Статичный сайт</p>
            <p className="project__text">↗</p>
          </a>
        </li>

        <li className='project'>
          <a target="_blank" href="https://github.com/Burunova-Olga/russian-travel" className="link project__link">
          <p className="project__text">Адаптивный сайт</p>
          <p className="project__text">↗</p>
          </a>
        </li>

        <li className='project'>
          <a target="_blank" href="https://github.com/Burunova-Olga/react-mesto-api-full-gha" className="link project__link">            
          <p className="project__text">Одностраничное приложение</p>
          <p className="project__text">↗</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;