import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function BoardPage() {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Kanban Board</h2>

      {user && <p>Welcome, {user.username}</p>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default BoardPage;

