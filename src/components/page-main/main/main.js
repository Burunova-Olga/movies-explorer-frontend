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
    const origBodyStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    return () => document.body.style.backgroundColor = origBodyStyle;
  }, []);
  
  useEffect(() => {
    const header = document.querySelector('.header');
    const origHeaderStyle = header.style.backgroundColor;
    header.style.backgroundColor = "rgb(7, 48, 66)";
    return () => header.style.backgroundColor = origHeaderStyle;
  }, []);

  return (
    <main>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </main>
  );
}

export default Main;
