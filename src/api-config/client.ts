import axios from 'axios';
import { getCookieValue } from '../utils/browserStorage';

export const client = axios.create({
  baseURL: 'https://bbubbu.me',
});

// 요청 인터셉터 추가하기
client.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    config.headers!.Authorization = `Bearer ${getCookieValue('accessToken')}`;
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);
