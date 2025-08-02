// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import { UserType } from '../api/auth/authTypes';

// import { UserType } from "../api/auth/authTypes";
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserType } from '../api/auth/authTypes';



// AsyncStorage 대신 임시로 localStorage 사용 
// const AsyncStorage = {
//     getItem: async (_key: string) => {
//         // 임시 구현
//         return null;
//     },
//     setItem: async (key: string, value: string) => {
//         // 임시 구현
//         console.log('토큰 저장:', key, value);
//     },
//     removeItem: async (key: string) => {
//         // 임시 구현
//         console.log('토큰 삭제:', key);
//     },
// };

interface AuthState {
    // 토큰 관련
    token: string | null;
    userId: number | null;

    // 사용자 정보
    userType: UserType | null;
    phoneNumber: string | null;

    // 로딩 상태
    isLoading: boolean;

    // 액션들
    setToken: (token: string, userId: number) => void;
    setUserInfo: (userType: UserType, phoneNumber: string) => void;
    setLoading: (loading: boolean) => void;
    logout: () => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, _get) => ({
            // 초기 상태
            token: null,
            userId: null,
            userType: null,
            phoneNumber: null,
            isLoading: false,

            // 토큰 설정
            setToken: (token: string, userId: number) => {
                set({ token, userId });
            },

            // 사용자 정보 설정
            setUserInfo: (userType: UserType, phoneNumber: string) => {
                set({ userType, phoneNumber });
            },

            // 로딩 상태 설정
            setLoading: (loading: boolean) => {
                set({ isLoading: loading });
            },

            // 로그아웃
            logout: () => {
                set({
                    token: null,
                    userId: null,
                    userType: null,
                    phoneNumber: null,
                });
            },

            // 인증 정보 완전 초기화
            clearAuth: () => {
                set({
                    token: null,
                    userId: null,
                    userType: null,
                    phoneNumber: null,
                    isLoading: false,
                });
            },
        }),
        {
            name: 'auth-storage', // AsyncStorage 키 이름
            storage: createJSONStorage(() => AsyncStorage),
            // 민감한 정보는 persist에서 제외할 수도 있음
            partialize: (state) => ({
                token: state.token,
                userId: state.userId,
                userType: state.userType,
                phoneNumber: state.phoneNumber,
            }),
        }
    )
);

// 편의 함수들
export const authUtils = {
    // 로그인 상태 확인
    isLoggedIn: () => {
        const { token } = useAuthStore.getState();
        return !!token;
    },

    // 토큰 가져오기
    getToken: () => {
        const { token } = useAuthStore.getState();
        return token;
    },

    // 사용자 타입 확인
    getUserType: () => {
        const { userType } = useAuthStore.getState();
        return userType;
    },

    // 농장주인지 확인
    isFarmer: () => {
        const { userType } = useAuthStore.getState();
        return userType === 'FARMER';
    },

    // 근로자인지 확인
    isWorker: () => {
        const { userType } = useAuthStore.getState();
        return userType === 'WORKER';
    },
}; 