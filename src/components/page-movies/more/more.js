// компонент для кнопки "Ещё"

import React from 'react';

function More({ onClick })
{
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    onClick();
  }

  return (
    <form onSubmit={handleSubmit} className='section more'> 
      <input type="submit" className="button more__button" value={"Ещё"}/>
    </form>
  );
}

export default More;