import axios, { AxiosError, AxiosResponse } from 'axios';
import { AUTH_BASE_URL, BASE_URL } from '@/src/constatnts';

const coreApiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

const responseBody = (response: AxiosResponse) => response;

export const coreRequests = {
  get: (url: string) => coreApiInstance.get(url).then(responseBody),
  post: (url: string, body: any) =>
    coreApiInstance.post(url, body).then(responseBody),
  patch: (url: string, body: any) =>
    coreApiInstance.patch(url, body).then(responseBody),
  put: (url: string, body: any) =>
    coreApiInstance.put(url, body).then(responseBody),
  delete: (url: string) => coreApiInstance.delete(url).then(responseBody),
};

coreApiInstance.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    if (__DEV__) {
      console.info('request => ', config);
    }
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

coreApiInstance.interceptors.response.use(
  (response: any) => {
    if (__DEV__) {
      console.info('api response => ', response?.data);
    }
    if (response.data.code < 0) {
      return Promise.reject(response.data.result);
    }
    if (__DEV__) {
      console.log('response => ', response);
    }
    return response;
  },
  async (error: any) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (__DEV__) {
      console.log('uncaught Error => ', error);
    }

    if (error === undefined) {
      const errorMsg = 'Please check your internet connection';
      console.error('Core API Error:: ', error);
      Promise.reject(errorMsg);
    }

    const errorMsg = error.response.data;

    if (__DEV__) {
      console.log(error.response);
      console.error('ERROR Core API => ', errorMsg);
    }
    return Promise.reject(errorMsg);
  }
);

export function setCoreApiAccessToken(token: string) {
  coreApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function setCoreApiXApiKey(token: string) {
  coreApiInstance.defaults.headers.common['x-api-key'] = `${token}`;
}

export function removeCoreApiAccessToken() {
  delete axios.defaults.headers.common['Authorization'];
}



export default coreApiInstance;
