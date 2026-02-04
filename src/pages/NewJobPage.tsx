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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">

      <h2 className="text-xl font-semibold mb-6 text-center">Add New Job</h2>

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />


      <input
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />


      <select
        className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={status}
        onChange={(e) => setStatus(e.target.value as JobStatus)}
      >
        <option value="APPLIED">Applied</option>
        <option value="INTERVIEW">Interview</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save</button>

        <button
          onClick={() => navigate("/board")}
          className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
        >
          Cancel</button>
      </div>

      </div>
    </div>
  );
}

export default NewJobPage;
