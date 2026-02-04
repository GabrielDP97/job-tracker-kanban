import type { JobStatus } from "../types/jobStatus";

export function getNextStatus(status: JobStatus): JobStatus | null {
  switch (status) {
    case "APPLIED":
      return "INTERVIEW";
    case "INTERVIEW":
      return "OFFER";
    case "OFFER":
      return "REJECTED";
    default:
      return null;
  }
}

export function getPrevStatus(status: JobStatus): JobStatus | null {
  switch (status) {
    case "INTERVIEW":
      return "APPLIED";
    case "OFFER":
      return "INTERVIEW";
    case "REJECTED":
      return "OFFER";
    default:
      return null;
  }
}
