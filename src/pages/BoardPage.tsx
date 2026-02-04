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
    <div>
      <h2>Kanban Board</h2>

      {/* Filtros */}
      <div style={{ marginBottom: "16px" }}>
        <input
          placeholder="Search by company or position"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
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
      {user && <p>Welcome, {user.username}</p>}

      <button onClick={logout}>Logout</button>

      {/* Kanban */}
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <KanbanColumn title="Applied" status="APPLIED" jobs={filteredJobs} />
        <KanbanColumn title="Interview" status="INTERVIEW" jobs={filteredJobs} />
        <KanbanColumn title="Offer" status="OFFER" jobs={filteredJobs} />
        <KanbanColumn title="Rejected" status="REJECTED" jobs={filteredJobs} />
      </div>

      <Link to="/new">+ Add new job</Link>
    </div>
  );
}

export default BoardPage;


