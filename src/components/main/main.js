// компонент страницы «О проекте»

import React from 'react';

import Promo from '../promo/promo';
import NavTab from '../nav-tab/nav-tab';

function Main()
{
  return (
    <main>
      <Promo />
      <NavTab />
    </main>
  );
}

export default Main;