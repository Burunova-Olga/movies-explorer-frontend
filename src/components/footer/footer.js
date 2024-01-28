// презентационный компонент, который отрисовывает подвал

import React from 'react';

function Footer()
{
  return (
    <section className="footer">
      <h2 className="footer_header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      
      <div className="info">
        <p className="info__year">© 2024</p>
        <div className="info__items">
          <a target="_blank" href="https://practicum.yandex.ru" className="info__item">Яндекс.Практикум</a>
          <a target="_blank" href="https://github.com" className="info__item">Github</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;