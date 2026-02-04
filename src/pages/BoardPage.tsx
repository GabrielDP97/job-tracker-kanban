import { Link } from "react-router-dom";
import { useJobStore } from "../store/jobStore";
import { useAuthStore } from "../store/authStore";
import KanbanColumn from "../components/KanbanColumn";


function BoardPage() {
  const jobs = useJobStore((state) => state.jobs);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h2>Kanban Board</h2>

      {user && <p>Welcome, {user.username}</p>}

      <button onClick={logout}>Logout</button>

      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <KanbanColumn title="Applied" status="APPLIED" jobs={jobs} />
        <KanbanColumn title="Interview" status="INTERVIEW" jobs={jobs} />
        <KanbanColumn title="Offer" status="OFFER" jobs={jobs} />
        <KanbanColumn title="Rejected" status="REJECTED" jobs={jobs} />
      </div>

      <Link to="/new">+ Add new job</Link>
    </div>
  );
}

export default BoardPage;

