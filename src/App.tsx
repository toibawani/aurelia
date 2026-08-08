import { useState } from "react";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

type View = "landing" | "auth" | "dashboard";

export default function App() {
  const [view, setView] = useState<View>("landing");

  if (view === "dashboard") {
    return (
      <Dashboard
        onLogout={() => setView("landing")}
      />
    );
  }

  if (view === "auth") {
    return (
      <Auth
        onSuccess={() => setView("dashboard")}
      />
    );
  }

  return (
    <Landing
      onGetStarted={() => setView("auth")}
      onLogin={() => setView("auth")}
    />
  );
}
