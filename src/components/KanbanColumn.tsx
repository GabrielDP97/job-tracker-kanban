import type { JobOffer } from "../types/jobOffer";
import type { JobStatus } from "../types/jobStatus";
import { useJobStore } from "../store/jobStore";
import { getNextStatus, getPrevStatus } from "../lib/jobStatusFlow";

const statusStyles: Record<JobStatus, { bg: string; text: string; badgeBg: string }> = 
{
  APPLIED: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    badgeBg: "bg-blue-100",
  },
  INTERVIEW: {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    badgeBg: "bg-yellow-100",
  },
  OFFER: {
    bg: "bg-green-50",
    text: "text-green-700",
    badgeBg: "bg-green-100",
  },
  REJECTED: {
    bg: "bg-red-50",
    text: "text-red-700",
    badgeBg: "bg-red-100",
  },
};


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
    <div className={`rounded-lg shadow-sm border border-gray-200 p-4 ${statusStyles[status].bg}`}>
      <h3 className={`flex items-center justify-between text-sm font-semibold mb-3 ${statusStyles[status].text}`}><span>{title}</span>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{filteredJobs.length}</span>
      </h3>


      {filteredJobs.length === 0 && (<p className="text-sm text-gray-500">No jobs</p> )}


    <div className="space-y-3">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-md p-3 bg-white shadow-sm">
            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mb-1 
              ${statusStyles[job.status].badgeBg} ${statusStyles[job.status].text}`}>
                {job.status}
            </span>     
            <p className="font-semibold text-gray-900">{job.company}</p>
            <p className="text-sm text-gray-600">{job.position}</p>
            <div className="flex gap-2 mt-3">
              {getPrevStatus(job.status) && (
                <button onClick={() => moveJob(job, "prev")} 
                className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200">←</button>
              )}
              {getNextStatus(job.status) && (
                <button onClick={() => moveJob(job, "next")} 
                className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200">→</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;

