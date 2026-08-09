import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

interface LoginFormProps {
  onLogin: () => void;
  onSignup: () => void;
  message?: string;
}

export default function LoginForm({
  onLogin,
  onSignup,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    onLogin();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="login-email"
          className="mb-2 block text-sm font-medium text-[#46534c]"
        >
          Email
        </label>

        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 w-full rounded-2xl border border-[#dedbd3] bg-white/70 px-4 text-sm text-[#29332e] outline-none transition placeholder:text-[#a3aaa5] focus:border-[#91a397] focus:bg-white focus:ring-4 focus:ring-[#dfe9dc]"
        />
      </div>

      <div>
        <label
          htmlFor="login-password"
          className="mb-2 block text-sm font-medium text-[#46534c]"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="h-12 w-full rounded-2xl border border-[#dedbd3] bg-white/70 px-4 pr-12 text-sm text-[#29332e] outline-none transition placeholder:text-[#a3aaa5] focus:border-[#91a397] focus:bg-white focus:ring-4 focus:ring-[#dfe9dc]"
          />

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#8a958f] transition hover:bg-[#f1f3ef] hover:text-[#4d5b53]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-2xl border border-[#ead6ce] bg-[#fbf0eb] px-4 py-3 text-sm text-[#8b6256]">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#293630] text-sm font-medium text-white shadow-[0_14px_30px_rgba(41,54,48,.16)] transition hover:-translate-y-0.5 hover:bg-[#34453d] active:translate-y-0"
      >
        Sign in
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>

      <p className="pt-2 text-center text-sm text-[#7d8882]">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSignup}
          className="font-medium text-[#52675b] underline decoration-[#bdc9bf] underline-offset-4 transition hover:text-[#293630]"
        >
          Create one
        </button>
      </p>
    </form>
  );
}