// презентационный компонент, который отрисовывает подвал

import React from 'react';

function Footer()
{
  return (
    <footer className="section footer">
      <h2 className="footer_header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      
      <div className="info">
        <p className="info__year">© 2024</p>
        <div className="info__items">
          <a target="_blank" href="https://practicum.yandex.ru" className="link info__item">Яндекс.Практикум</a>
          <a target="_blank" href="https://github.com" className="link info__item">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;