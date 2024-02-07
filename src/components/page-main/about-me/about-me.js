// компонент с информацией о студенте

import React from 'react';
import photo from '../../../images/my_photo.jpg';
import Portfolio from '../portfolio/portfolio';

function AboutMe()
{
  return (
    <section id="about-me" className="lending__section about-me">
      <h2 className="lending__header about-me__header">Студент</h2>
      
      <div className='about-me__columns'>
        <article className='about-me__info'>
          <h3 className='about-me__title'>Ольга</h3>
          <h4 className='about-me__subtitle'>Программист-разработчик, 30 лет</h4>
          <p className='about-me__paragraph'>Я родилась в Пензе, сейчас живу в Подмосковье. 
          Закончила факультет вычислительной техники ПГУ. Первые программы были написаны еще в 2007 году, 
          и с тех пор я существенно улучшила свои навыки. С 2018 года работаю в НПО "Наука". 
          </p>
          <a target="_blank" href="https://github.com/Burunova-Olga" className='link about-me__link'>Github</a>
        </article>
        
        <img src={photo} class="about-me__photo" alt='Это я'/>
      </div>
      
      <Portfolio />
    </section>
  );
}

export default AboutMe;