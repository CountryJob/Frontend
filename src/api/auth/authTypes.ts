// User Types
export const USER_TYPES = {
    FARMER: 'FARMER',
    WORKER: 'WORKER',
    ADMIN: 'ADMIN',
} as const;

export type UserType = typeof USER_TYPES[keyof typeof USER_TYPES];

// 인증번호 요청 요청 타입
export interface RequestCodeRequest {
    phoneNumber: string;
}

// 인증번호 검증 + 로그인/회원가입 요청 타입
export interface VerifyCodeRequest {
    phoneNumber: string;
    code: number;
    mode?: UserType | null; // 신규가입 시에만 필수, null 처리 가능
}

// 성공 응답 타입
export interface SuccessResponse {
    message?: string;
    token?: string;
    userId?: number;
}

// 실패 응답 타입
export interface ErrorResponse {
    code: number;
    success: false;
    message: string;
}

// API 응답 타입 (성공 또는 실패)
export type ApiResponse<T = SuccessResponse> = T | ErrorResponse;

// 인증 관련 응답 타입들
export interface RequestCodeResponse extends SuccessResponse {
    message: string; // "Sent verification code successfully."
}

export interface VerifyCodeResponse extends SuccessResponse {
    token: string;
    userId: number;
}

export interface LogoutResponse extends SuccessResponse {
    message: string; // "Log-out succeeded."
}