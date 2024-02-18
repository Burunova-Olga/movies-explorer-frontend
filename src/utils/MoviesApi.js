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
