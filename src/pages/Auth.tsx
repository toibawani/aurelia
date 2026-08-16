import { useState } from "react";

import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../features/auth/components/LoginForm";
import SignupForm from "../features/auth/components/SignupForm";

type AuthMode = "login" | "signup";

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("login");

  const isLogin = mode === "login";

  return (
    <AuthLayout
      title={isLogin ? "Welcome back." : "Create your space."}
      subtitle={
        isLogin
          ? "Sign in and continue where you left off."
          : "A small space for the things that matter to you."
      }
      onBack={() => window.history.back()}
    >
      {isLogin ? (
        <LoginForm
          onLogin={() => {
            // Login handling is owned by the auth flow.
          }}
          onSignup={() => setMode("signup")}
        />
      ) : (
        <SignupForm
          onSignup={() => {
            // Signup handling is owned by the auth flow.
          }}
          onLogin={() => setMode("login")}
        />
      )}
    </AuthLayout>
  );
}