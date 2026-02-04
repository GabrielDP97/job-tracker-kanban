import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobStore } from "../store/jobStore";
import type { JobStatus } from "../types/jobStatus";

function NewJobPage() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState<JobStatus>("APPLIED");

  const addJob = useJobStore((state) => state.addJob);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!company || !position) return;

    addJob({
      id: crypto.randomUUID(),
      company,
      position,
      status,
    });

    navigate("/board");
  };

  return (
    <div>
      <h2>New Job</h2>

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as JobStatus)}
      >
        <option value="APPLIED">Applied</option>
        <option value="INTERVIEW">Interview</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default NewJobPage;
