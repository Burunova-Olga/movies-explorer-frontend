// Переключатель

import React, {useEffect} from 'react';

function Checkbutton({onClick})
{  
  useEffect(() =>
  {
    if (localStorage.getItem('isShortMovies') != null )
      {
        const isChecked = JSON.parse(localStorage.getItem('isShortMovies'));
        document.querySelector('.checkbutton__input').checked = isChecked;        
      }
  }, [])

  return (
    <label className="checkbutton" htmlFor="short-films">
      <input type="checkbox" name="short-films" value="short-films" id="short-films" 
        className="checkbutton__input" onClick={onClick}/>
      <span className="checkbutton__pseudo" />
      <span className="checkbutton__label-text">Короткометражки</span>
    </label>     
  );
}

export default Checkbutton;