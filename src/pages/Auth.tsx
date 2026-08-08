import { useState } from "react";

import AuthShell from "../features/auth/components/AuthShell";
import LoginForm from "../features/auth/components/LoginForm";
import SignupForm from "../features/auth/components/SignupForm";

type AuthMode = "login" | "signup";

export default function Auth() {
  const [mode, setMode] =
    useState<AuthMode>("signup");

  function enterDashboard() {
    window.location.href = "/dashboard";
  }

  if (mode === "login") {
    return (
      <AuthShell
        eyebrow="Welcome back"
        title="Good to see you."
        description="Your space is waiting. Pick up where you left off."
      >
        <LoginForm
          onSwitchToSignup={() =>
            setMode("signup")
          }
          onSuccess={enterDashboard}
        />
      </AuthShell>
    );
  }

  return (
    <AuthShell
      eyebrow="Start gently"
      title="Create your space."
      description="Aurelia is a quieter place to organize your days, focus your attention and make progress."
    >
      <SignupForm
        onSwitchToLogin={() =>
          setMode("login")
        }
        onSuccess={enterDashboard}
      />
    </AuthShell>
  );
}
