// import config from 'config';
import delay from './delay';

export default class userAPI {
  static login(Username, Password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          Username,
          Email: 'asdas@adsas.com',
          Token: '234557464563dsfsdfsd',
        };
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);

        // const requestOptions = {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ username, password }),
        // };

        // return fetch(`${config.get('apiUrl')}/users/authenticate`, requestOptions)
        //   .then(handleResponse)
        //   .then((user) => {
        //     // login successful if there's a jwt token in the response
        //     if (user.token) {
        //       // store user details and jwt token in local storage to keep user logged in between page refreshes
        //       localStorage.setItem('user', JSON.stringify(user));
        //     }

        //     resolve(user);
        //   });
      }, delay);
    });
  }

  static handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
        //   logout();
        //   location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }
}
