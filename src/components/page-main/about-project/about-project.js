// компонент с описанием дипломного проекта

import React from 'react';

function AboutProject()
{
  return (
    <section id="about-project" className="section__main about-project">
      <h2 className="section__header about-project__header">О проекте</h2>
      
      <article className="two-columns">
        <div className="two_columns__column">
          <h3 className="two-columns__header">Дипломный проект включал 5 этапов</h3>
          <p className="two-columns__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>

        <div className="two_columns__column">
          <h3 className="two-columns__header">На выполнение диплома ушло 5 недель</h3>
          <p className="two-columns__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>

      <div className="diagram">
        <p className="diagram__text">1 неделя</p>
        <p className="diagram__text">4 недели</p>
        <p className="diagram__comment">Back-end</p>
        <p className="diagram__comment">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;

/*
      


*/