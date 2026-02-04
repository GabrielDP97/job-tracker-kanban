import { create } from "zustand";
import type { JobOffer } from "../types/jobOffer";
import { getJobs, saveJobs } from "../lib/jobStorage";

type JobState = {
  jobs: JobOffer[];
  addJob: (job: JobOffer) => void;
  updateJob: (job: JobOffer) => void;
  deleteJob: (id: string) => void;
};

export const useJobStore = create<JobState>((set, get) => ({
  jobs: getJobs(),

  addJob: (job) => {
    const updated = [...get().jobs, job];
    saveJobs(updated);
    set({ jobs: updated });
  },

  updateJob: (job) => {
    const updated = get().jobs.map((j) =>
      j.id === job.id ? job : j
    );
    saveJobs(updated);
    set({ jobs: updated });
  },

  deleteJob: (id) => {
    const updated = get().jobs.filter((j) => j.id !== id);
    saveJobs(updated);
    set({ jobs: updated });
  },
}));
