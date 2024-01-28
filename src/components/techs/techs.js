// компонент с использованными технологиями

import React from 'react';

function Techs()
{
  return (
    <section id="techs" className="section techs">
      <h2 className="section__header techs__header">Технологии</h2>
      <h3 className='techs__title'>7 технологий</h3>
      <p className="techs__paragraph">
      На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>

      <ul class="techs__table">
        <li class="techs__item">HTML</li>
        <li class="techs__item">CSS</li>
        <li class="techs__item">JS</li>
        <li class="techs__item">React</li>
        <li class="techs__item">Git</li>
        <li class="techs__item">Express.js</li>
        <li class="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;