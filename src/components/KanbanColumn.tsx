import type { JobOffer } from "../types/jobOffer";
import type { JobStatus } from "../types/jobStatus";

type Props = {
  title: string;
  status: JobStatus;
  jobs: JobOffer[];
};

function KanbanColumn({ title, status, jobs }: Props) {
  const filteredJobs = jobs.filter((job) => job.status === status);

  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", width: "200px" }}>
      <h3>{title}</h3>

      {filteredJobs.length === 0 && <p>No jobs</p>}

      {filteredJobs.map((job) => (
        <div
          key={job.id}
          style={{ border: "1px solid black", marginBottom: "8px", padding: "4px" }}
        >
          <strong>{job.company}</strong>
          <p>{job.position}</p>
        </div>
      ))}
    </div>
  );
}

export default KanbanColumn;
