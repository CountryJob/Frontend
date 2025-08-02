import api from '../client/apiClient';
import {
    RequestCodeRequest,
    VerifyCodeRequest,
    RequestCodeResponse,
    VerifyCodeResponse,
    LogoutResponse,
} from './authTypes';

// API Endpoints
const API_ENDPOINTS = {
    AUTH: {
        REQUEST_CODE: '/auth/request-code',
        VERIFY_CODE: '/auth/verify-code',
        LOGOUT: '/auth/logout',
    },
};

export const authApi = {
    /**
     * 인증번호 요청
     */
    requestCode: (data: RequestCodeRequest) =>
        api.post<RequestCodeResponse>(API_ENDPOINTS.AUTH.REQUEST_CODE, data)
            .then(response => response.data),

    /**
     * 인증번호 검증 + 로그인/회원가입
     */
    verifyCode: (data: VerifyCodeRequest) =>
        api.post<VerifyCodeResponse>(API_ENDPOINTS.AUTH.VERIFY_CODE, data)
            .then(response => response.data),

    /**
     * 로그인 (기존 사용자)
     */
    login: (phoneNumber: string, code: number) =>
        authApi.verifyCode({
            phoneNumber,
            code,
        }),

    /**
     * 회원가입 (신규 사용자)
     */
    signup: async (phoneNumber: string, code: number, userType: 'FARMER' | 'WORKER'): Promise<VerifyCodeResponse> =>{
        await authApi.requestCode({ phoneNumber });

        // 2) 인증번호 검증 + 회원가입
        return authApi.verifyCode({
            phoneNumber,
            code,
            mode: userType,
        });
    },
        
        // authApi.verifyCode({
        //     phoneNumber,
        //     code,
        //     mode: userType,
        // }),

    /**
     * 로그아웃
     */
    logout: (token: string) =>
        api.post<LogoutResponse>(
            API_ENDPOINTS.AUTH.LOGOUT,
            {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        ).then(response => response.data),

    /**
     * 토큰 저장 (AsyncStorage 사용)
     */
    saveToken: async (_token: string): Promise<void> => {
        // AsyncStorage를 사용하여 토큰 저장
        // import AsyncStorage from '@react-native-async-storage/async-storage';
        // await AsyncStorage.setItem('authToken', token);
    },

    /**
     * 토큰 가져오기 (AsyncStorage 사용)
     */
    getToken: async (): Promise<string | null> => {
        // AsyncStorage를 사용하여 토큰 가져오기
        // import AsyncStorage from '@react-native-async-storage/async-storage';
        // try {
        //     return await AsyncStorage.getItem('authToken');
        // } catch (error) {
        //     return null;
        // }
        return null;
    },

    /**
     * 토큰 삭제 (AsyncStorage 사용)
     */
    removeToken: async (): Promise<void> => {
        // AsyncStorage를 사용하여 토큰 삭제
        // import AsyncStorage from '@react-native-async-storage/async-storage';
        // await AsyncStorage.removeItem('authToken');
    },
};
