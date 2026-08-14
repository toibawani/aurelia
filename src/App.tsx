import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import NotesPage from "./features/notes/components/NotesPage";
import ProtectedRoute from "./features/auth/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Protected application routes */}

      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard/notes"
          element={<NotesPage />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/dashboard/tasks"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="/dashboard/garden"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="/dashboard/insights"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />
      </Route>

      {/* Fallback */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}