import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { accessTokenService } from './accessTokenService';

export const ApiUrl = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: ApiUrl,
});

const apiRequestInterceptor = (config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  const accessToken = accessTokenService.getToken();

  if (accessToken) {
    const newConfigHeaders = {
      ...(newConfig.headers ?? {}),
      Authorization: `Bearer ${accessToken}`,
    };

    newConfig.headers = newConfigHeaders;
  }

  return newConfig;
};

const apiResponceErrorInterceptor = async (error: Error | AxiosError) => {
  if ((error as AxiosError).response?.status === 401) {
    accessTokenService.deleteToken();

    // eslint-disable-next-line no-console
    console.info(
      'Вы не авторизованы. Доступ запрещен. Авторизационные данные удалены',
    );
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

api.interceptors.request.use(apiRequestInterceptor);
api.interceptors.response.use(config => config, apiResponceErrorInterceptor);

export { api };
