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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-3"><span>{title}</span>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{filteredJobs.length}</span>
      </h3>


      {filteredJobs.length === 0 && (<p className="text-sm text-gray-500">No jobs</p> )}


    <div className="space-y-3">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-md p-3 bg-white shadow-sm">
            <p className="font-semibold text-gray-900">{job.company}</p>
            <p className="text-sm text-gray-600">{job.position}</p>
            <div className="flex gap-2 mt-3">
              {getPrevStatus(job.status) && (
                <button onClick={() => moveJob(job, "prev")} 
                className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">←</button>
              )}
              {getNextStatus(job.status) && (
                <button onClick={() => moveJob(job, "next")} 
                className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">→</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;

