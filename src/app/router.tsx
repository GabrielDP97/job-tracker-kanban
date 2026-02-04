import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import BoardPage from "../pages/BoardPage";
import ProtectedRoute from "./ProtectedRoute";
import NewJobPage from "../pages/NewJobPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/board" element={ <ProtectedRoute> <BoardPage /> </ProtectedRoute> } />
        <Route path="/new" element={ <ProtectedRoute> <NewJobPage /> </ProtectedRoute> } />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
