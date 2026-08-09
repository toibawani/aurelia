import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("Please fill in all fields.");
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

        <h1>Create your space.</h1>

        <p>
          A simple place to plan, reflect and move through your days with
          intention.
        </p>

        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: "16px" }}>
            <label>Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
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
              placeholder="Create a password"
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
            Create Account
          </button>
        </form>

        <p style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}