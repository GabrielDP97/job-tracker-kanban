import { useJobStore } from "./jobStore";
import type { JobOffer } from "../types/jobOffer";

describe("jobStore", () => {
  it("adds a job offer", () => {
    const job: JobOffer = {
      id: "1",
      company: "Google",
      position: "Frontend Developer",
      status: "APPLIED",
    };

    useJobStore.getState().addJob(job);

    const jobs = useJobStore.getState().jobs;
    expect(jobs.length).toBeGreaterThan(0);
    expect(jobs[0].company).toBe("Google");
  });
});
