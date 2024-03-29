// компонент с использованными технологиями

import React from 'react';

function Techs()
{
  return (
    <section id="techs" className="lending__section techs">
      <h2 className="lending__header techs__header">Технологии</h2>
      <h3 className='techs__title'>7 технологий</h3>
      <p className="techs__paragraph">
      На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
     
      <ul className="techs__table">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
