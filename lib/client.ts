import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://bbubbu.me',
});

// 요청 인터셉터 추가하기
client.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    config.headers!.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);
