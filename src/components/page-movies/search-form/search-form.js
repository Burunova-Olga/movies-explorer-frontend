// форма поиска, куда пользователь будет вводить запрос

import React from 'react';
import { useForm } from "../../../hooks/UseForm";
import find from '../../../images/find.svg';
import Checkbutton from '../filter-checkbox/filter-checkbox';

function SearchForm({onSubmit})
{
  const {formValues, handleChange, setFormValues} = useForm ({ request: localStorage.getItem('request')});
 
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    sendReqest();
  }

  const sendReqest = (e) =>
  {
    if (!formValues.request) 
    {
      document.querySelector('.input-error').classList.add('error_visible');
      return;
    }
    else 
      document.querySelector('.input-error').classList.remove('error_visible');
          
    const checkbox = document.getElementById('short-films');
    onSubmit({request: formValues.request, isShortMovies: checkbox.checked});    
  }

  return (
    <section className="section search" aria-label='Поиск по фильмам'>
      <form onSubmit={handleSubmit} className='search__form'> 
        <input type="text" className="search__request" name="request" id="input-request" 
          placeholder="Фильм" value={formValues.request} onChange={handleChange} />

        <input type="submit" className="button search__submit" style={{ backgroundImage: `url(${find})` }} />
        
        <p className="error input-error">Нужно ввести ключевое слово</p>
        <Checkbutton onClick={sendReqest}/>
      </form>
    </section>
  );
}

export default SearchForm;