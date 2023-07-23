import axios, { AxiosResponse } from 'axios';
import { AUTH_BASE_URL } from '../constatnts';


const instance = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

const responseBody = (response: AxiosResponse) => response;

export const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: any) => instance.post(url, body).then(responseBody),
  patch: (url: string, body: any) =>
    instance.patch(url, body).then(responseBody),
  put: (url: string, body: any) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

instance.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    if (response.data.code < 0) {
      return Promise.reject(response.data.result);
    }

    return response;
  },
  (error: any) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const errorMsg = error.response.data.message || error.message;
    console.error('ERROR => ', errorMsg);

    return Promise.reject(errorMsg);
  }
);

export function setAccessToken(token: string) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function removeApiAccessToken() {
  delete axios.defaults.headers.common['Authorization'];
}


export default instance;
