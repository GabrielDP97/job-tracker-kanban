import type { JobOffer } from "../types/jobOffer";

const JOBS_KEY = "job-tracker-jobs";

export function saveJobs(jobs: JobOffer[]) {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
}

export function getJobs(): JobOffer[] {
  const data = localStorage.getItem(JOBS_KEY);
  return data ? JSON.parse(data) : [];
}
