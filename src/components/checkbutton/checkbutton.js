// Переключатель

import React from 'react';

function Checkbutton()
{  
  return (
    <label className="checkbutton" htmlFor="short-films">
      <input type="checkbox" name="short-films" value="short-films" id="short-films" 
        className="checkbutton__input" defaultChecked/>
      <span className="checkbutton__pseudo" />
      <span className="checkbutton__label-text">Короткометражки</span>
    </label>     
  );
}

export default Checkbutton;