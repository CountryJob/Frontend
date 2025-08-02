import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from '@env';

const api = axios.create({
    baseURL: API_BASE_URL || 'http://localhost:8090', // 프록시 서버 주소
    timeout: parseInt(API_TIMEOUT) || 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터 (예: 토큰 자동 추가)
api.interceptors.request.use(config => {
    // baseURL 또는 url이 undefined일 경우 빈 문자열로 대체
    const fullUrl = `${config.baseURL ?? ''}${config.url ?? ''}`;
    console.log('➡️ Request URL:', fullUrl);
    return config;
  });

export default api; 

// // src/client/apiClient.ts
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { API_BASE_URL, API_TIMEOUT } from '@env';

// const api = axios.create({
//   baseURL: API_BASE_URL || 'http://localhost:8090',
//   timeout: parseInt(API_TIMEOUT, 10) || 5000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.request.use(
//   async config => {
//     const fullUrl = `${config.baseURL ?? ''}${config.url ?? ''}`;
//     console.log('➡️ Request URL:', fullUrl);

//     // AsyncStorage 에서 persist된 auth-storage 전체 JSON 꺼내기
//     const raw = await AsyncStorage.getItem('auth-storage');
//     if (raw) {
//       try {
//         const parsed = JSON.parse(raw);
//         const token = parsed.state?.token; 
//         if (token && config.headers) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//       } catch (e) {
//         console.warn('auth-storage 파싱 오류', e);
//       }
//     }

//     return config;
//   },
//   error => Promise.reject(error),
// );

// export default api;
