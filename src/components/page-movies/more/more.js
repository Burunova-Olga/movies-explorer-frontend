// компонент для кнопки "Ещё"

import React from 'react';

function More({ onClick })
{
  return (
    <form onSubmit={onClick} className='section more'> 
      <input type="submit" className="more__button" value={"Ещё"}/>
    </form>
  );
}

export default More;