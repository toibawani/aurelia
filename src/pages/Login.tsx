import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("");
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            marginBottom: "24px",
          }}
        >
          ← Back
        </button>

        <h1>Welcome back.</h1>
        <p>Sign in and continue from where you left off.</p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "16px" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {message && (
            <p style={{ color: "red", marginBottom: "16px" }}>
              {message}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}