import { create } from "zustand";

export default useJobStore = create((set) => ({
  jobs: [],
  selectedJob: null,
  setJobs: (jobs) => set({jobs}),
  selectJob: (job) => set({selectedJob: job}),
  cleareSelectedJob: () => set({selectedJob: null}),
}));