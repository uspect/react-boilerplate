import cookie from 'js-cookie';

import { ACCESS_TOKEN_KEY } from '../../resources/constants';

class AccessTokenService {
  public getToken() {
    return cookie.get(ACCESS_TOKEN_KEY);
  }

  public setToken(token: string) {
    cookie.set(ACCESS_TOKEN_KEY, token);
  }

  public deleteToken() {
    cookie.remove(ACCESS_TOKEN_KEY);
  }
}

export const accessTokenService = new AccessTokenService();
