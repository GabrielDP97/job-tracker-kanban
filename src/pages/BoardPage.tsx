import { Link } from "react-router-dom";
import { useState } from "react";

import { useJobStore } from "../store/jobStore";
import { useAuthStore } from "../store/authStore";
import KanbanColumn from "../components/KanbanColumn";

import type { JobStatus } from "../types/jobStatus";

function BoardPage() {
  const jobs = useJobStore((state) => state.jobs);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<JobStatus | "ALL">("ALL");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.position.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>

      {/* Filtros */}
      <div className="flex gap-4 mb-6">
        <input
          className="border rounded px-3 py-2 w-64"
          placeholder="Search by company or position"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded px-3 py-2"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as JobStatus | "ALL")
          }
        >
          <option value="ALL">All</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEW">Interview</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>


      {/* Usuario */}
      <div className="flex items-center justify-between mb-6"> {user && <p className="text-gray-700">Welcome, {user.username}</p>}

      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
      </div>


      {/* Kanban */}
      <div className="grid grid-cols-4 gap-6">
        <KanbanColumn title="Applied" status="APPLIED" jobs={filteredJobs} />
        <KanbanColumn title="Interview" status="INTERVIEW" jobs={filteredJobs} />
        <KanbanColumn title="Offer" status="OFFER" jobs={filteredJobs} />
        <KanbanColumn title="Rejected" status="REJECTED" jobs={filteredJobs} />
      </div>

      <Link to="/new" className="inline-block mt-6 text-blue-600 hover:underline">+ Add new job</Link>
    </div>
  );
}

export default BoardPage;


