import api from '../client/apiClient';

const API_ENDPOINTS = {
  JOBS: {
    AUTO_WRITE: '/jobs/auto-write'
  },
};

export const jobsApi22 = {
  autoWrite: async (payload) => {
    const response = await api.post(API_ENDPOINTS.JOBS.AUTO_WRITE, payload);
    return response.data;
  }
}