import type { JobStatus } from "./jobStatus";

export type JobOffer = {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
};
