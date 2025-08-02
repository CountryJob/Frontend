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
    // const token = await getToken();
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api; 