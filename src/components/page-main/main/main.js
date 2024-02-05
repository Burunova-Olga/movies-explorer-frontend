// компонент страницы «О проекте»

import { useEffect, React } from 'react';

import Promo from '../promo/promo';
import NavTab from '../nav-tab/nav-tab';
import AboutProject from '../about-project/about-project';
import Techs from '../techs/techs';
import AboutMe from '../about-me/about-me';
import Footer from '../../footer/footer';
import Header from '../../header/header';

function Main()
{
  useEffect(() => {
    const header = document.querySelector('.header');
    const origHeaderStyle = header.style.backgroundColor;
    header.style.backgroundColor = "rgb(7, 48, 66)";
    return () => header.style.backgroundColor = origHeaderStyle;
  }, []);

  return (
    <div className='lending'>
      <Header />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default Main;

/*

*/