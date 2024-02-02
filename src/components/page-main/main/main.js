// компонент страницы «О проекте»

import { useEffect, React } from 'react';

import Promo from '../promo/promo';
import NavTab from '../nav-tab/nav-tab';
import AboutProject from '../about-project/about-project';
import Techs from '../techs/techs';
import AboutMe from '../about-me/about-me';
import Footer from '../../footer/footer';

function Main()
{
  useEffect(() => {
    const origFontStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    return () => document.body.style.backgroundColor = origFontStyle;
  }, []);

  return (
    <main>
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
