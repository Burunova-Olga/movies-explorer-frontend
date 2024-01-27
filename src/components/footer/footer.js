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
          <p className="info__item">Яндекс.Практикум</p>   
          <p className="info__item">Github</p>       
        </div>
      </div>
    </section>
  );
}

export default Footer;