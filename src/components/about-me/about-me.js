// компонент с информацией о студенте

import React from 'react';
import photo from '../../images/my_photo.jpg';

function AboutMe()
{
  return (
    <section className="section about-me">
      <h2 className="section__header about-me__header">Студент</h2>
      
      <div className='about-me__columns'>
        <article className='about-me__info'>
          <h3 className='about-me__title'>Ольга</h3>
          <h4 className='about-me__subtitle'>Программист-разработчик, 30 лет</h4>
          <p className='about-me__paragraph'>Я родилась в Пензе, сейчас живу в Подмосковье. 
          Закончила факультет вычислительной техники ПГУ. Первые программы были написаны еще в 2007 году, 
          и с тех пор я существенно улучшила свои навыки. С 2018 года работаю в НПО "Наука". 
          </p>
          <p className='about-me__link'>Github</p>
        </article>
        <div style={{ backgroundImage: `url(${photo})` }} className="about-me__photo" />
      </div>

      <h3 className='about-me__portfolio'>Портфолио</h3>
      <ul className='about-me_projects'>
        <li className="project">
          <p className="project__name">Статичный сайт</p>
          <p className="project__link">↗</p>          
        </li>
        <li class="project">
          <p className="project__name">Адаптивный сайт</p>
          <p className="project__link">↗</p>
        </li>
        <li class="project">
          <p className="project__name">Одностраничное приложение</p>
          <p className="project__link">↗</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;