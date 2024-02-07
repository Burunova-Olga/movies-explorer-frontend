// презентационный компонент, который отрисовывает подвал

import React from 'react';

function Footer()
{
  return (
    <footer className="section footer">
      <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      
      <div className="info">
        <p className="info__year">© 2024</p>
        <ul className="info__items">
          <li><a target="_blank" href="https://practicum.yandex.ru" className="link info__item">Яндекс.Практикум</a></li>
          <li><a target="_blank" href="https://github.com" className="link info__item">Github</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;