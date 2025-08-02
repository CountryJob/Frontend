import api from '../client/apiClient';

const API_ENDPOINTS = {
  JOBS: {
    AUTO_WRITE: '/jobs/auto-write',
  },
};

export interface JobDto {

  [key: string]: any;
}

export interface AutoWriteResponse {
  jobdto: JobDto;
  CREATED: boolean;
}

export const jobsApi = {
  /**
   * 오디오 파일 업로드만 Multipart/form-data 로 전송
   * @param formData FormData(‘audioFile’ 필드 포함)
   * @param token    JWT 토큰
   */
  autoWrite: async (
    formData: FormData,
    token: string,
  ): Promise<AutoWriteResponse> => {
    console.log("🚀 ~ formData:", formData)

    const response = await api.post<AutoWriteResponse>(
      API_ENDPOINTS.JOBS.AUTO_WRITE,
      formData,
      {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    console.log('response', response);
    return response.data;
  },
};