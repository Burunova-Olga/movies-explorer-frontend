// компонент с вёрсткой баннера страницы «О проекте»

import React from 'react';
import banner from '../../images/banner.svg';

function Promo()
{
  return (
    <section className="promo">      
      <div style={{ backgroundImage: `url(${banner})` }} className="promo__image" />
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;