import BaseApi from './BaseApi';

class Api extends BaseApi
{
  getUserInfo()
  {
    return this._request
    ({
      method: 'GET',
      url: "/users/me",
      moreHeader: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    });
  }

  setUserInfo(name, email)
  {
    return this._request
    ({
      method: 'PATCH',
      url: "/users/me",
      body: JSON.stringify
        ({
          name: name,
          email: email
        }),
      moreHeader: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    })
  }
  
  getMovies()
  {
    return this._request
    ({
      method: 'GET',
      url: "/movies",
      moreHeader: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    });
  }

  addNewCard({movie})
  {
    const baseUrl = 'https://api.nomoreparties.co/';
    
    return this._request
    ({
      method: 'POST',
      url: "/movies",
      body: JSON.stringify
        ({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: baseUrl + movie.image.url,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: baseUrl +  movie.image.formats.thumbnail.url,
          movieId: movie.id,
        }),
      moreHeader: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    })
  }

  changeLike(cardId, isLike)
  {
    const method = isLike ? 'PUT' : 'DELETE';
    return this._request
    ({
      method: method,
      url: `/cards/${cardId}/likes`,
      moreHeader: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    });
  }

  deleteCard(cardId)
  {
    return this._request
    ({
      method: 'DELETE',
      url: `/cards/${cardId}`,
      moreHeader: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    });
  }
}

const api = new Api 
({ 
  baseUrl: 'https://api.burunova.diploma.nomoredomainsmonster.ru',  
  headers:
  {
    'Content-Type': 'application/json'
  }
}); 

export default api;
