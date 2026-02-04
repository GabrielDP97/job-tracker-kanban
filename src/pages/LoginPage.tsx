import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function LoginPage() {
  const [username, setUsername] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return;
    login(username);
    navigate("/board");
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;

