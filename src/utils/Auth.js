import BaseApi from './BaseApi';

class Auth extends BaseApi
{
  register(email, password, name)
  {
    return this._request
      ({
        method: 'POST',
        url: "/signup",
        body: JSON.stringify({ email, password, name })
      })
      .then((res) =>
      {
        return res;
      })
  };

  authorize(email, password)
  {
    return this._request
      ({
        method: 'POST',
        url: "/signin",
        body: JSON.stringify({ email, password })
      })
      .then((data) =>
      {
        if (data.token)
        {
          localStorage.setItem('token', data.token);
          return data;
        }
        else 
          return data.message;
      })
  };

  checkToken(request)
  {
    return this._request
      ({
        method: 'GET',
        url: "/users/me",
        moreHeader: { 'authorization': `Bearer ${request}` },
      })
      .then((data) =>
      {
        return data;
      })
  }
}

const auth = new Auth 
({ 
  baseUrl: 'https://api.burunova.diploma.nomoredomainsmonster.ru',   
  headers:
  {
    'Content-Type': 'application/json'
  }
}); 

export default auth;