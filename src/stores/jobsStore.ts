// src/stores/jobsStore.ts
import { create } from 'zustand';

export interface JobPost {
  id: string;
  title: string;
  area_size: number;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  address: string;
  description: string;
  recruit_count_male: number;
  recruit_count_female: number;
  salary_male: number;
  salary_female: number;
  meal: boolean;
  snack: boolean;
  transport_allowance: boolean;
  experience_required: boolean;
  applicantCount: number;
  hasApplicants: boolean;
}

interface JobsState {
  jobs: JobPost[];
  addJob: (job: JobPost) => void;
}

export const useJobsStore = create<JobsState>(set => ({
  jobs: [],
  addJob: job => set(state => ({ jobs: [...state.jobs, job] })),
}));
