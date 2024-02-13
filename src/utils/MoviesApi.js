import BaseApi from './BaseApi';

class Api extends BaseApi
{
  getMovies()
  {
    return this._request
    ({
      method: 'GET',
      url: "/",
    });
  }

  addNewCard(name, link)
  {
    return this._request
    ({
      method: 'POST',
      url: "/cards",
      body: JSON.stringify
        ({
          name: name,
          link: link
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
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',  
  headers:
  {
    'Content-Type': 'application/json'
  }
}); 

export default api;
