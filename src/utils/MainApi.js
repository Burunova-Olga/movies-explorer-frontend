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
