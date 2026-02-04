import type { JobOffer } from "../types/jobOffer";
import type { JobStatus } from "../types/jobStatus";
import { useJobStore } from "../store/jobStore";
import { getNextStatus, getPrevStatus } from "../lib/jobStatusFlow";

type Props = {
  title: string;
  status: JobStatus;
  jobs: JobOffer[];
};

function KanbanColumn({ title, status, jobs }: Props) {
  const updateJob = useJobStore((state) => state.updateJob);

  const filteredJobs = jobs.filter((job) => job.status === status);

  const moveJob = (job: JobOffer, direction: "next" | "prev") => {
    const newStatus =
      direction === "next"
        ? getNextStatus(job.status)
        : getPrevStatus(job.status);

    if (!newStatus) return;

    updateJob({ ...job, status: newStatus });
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", width: "200px" }}>
      <h3>{title}</h3>

      {filteredJobs.length === 0 && <p>No jobs</p>}

      {filteredJobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid black",
            marginBottom: "8px",
            padding: "4px",
          }}
        >
          <strong>{job.company}</strong>
          <p>{job.position}</p>

          <div style={{ display: "flex", gap: "4px" }}>
            {getPrevStatus(job.status) && (
              <button onClick={() => moveJob(job, "prev")}>←</button>
            )}

            {getNextStatus(job.status) && (
              <button onClick={() => moveJob(job, "next")}>→</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanColumn;

