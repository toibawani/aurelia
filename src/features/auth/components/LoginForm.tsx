import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

import { useAuth } from "../hooks/useAuth";

interface LoginFormProps {
  onSwitchToSignup: () => void;
  onSuccess: () => void;
}

export default function LoginForm({
  onSwitchToSignup,
  onSuccess,
}: LoginFormProps) {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      const user = signIn({
        email,
        password,
      });

      setLoading(false);

      if (!user) {
        setError(
          "We couldn't find an account with those details.",
        );
        return;
      }

      onSuccess();
    }, 500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="login-email"
          className="mb-2 block text-sm font-medium"
        >
          Email
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa49f]"
          />

          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="you@example.com"
            autoComplete="email"
            className="h-13 w-full rounded-2xl border border-[#ddd7cc] bg-white/75 pl-11 pr-4 outline-none transition placeholder:text-[#b1b8b3] focus:border-[#8d9b93] focus:bg-white focus:ring-4 focus:ring-[#dce5dd]"
          />
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="login-password"
            className="text-sm font-medium"
          >
            Password
          </label>

          <button
            type="button"
            className="text-xs font-medium text-[#7b8981] transition hover:text-[#27332f]"
          >
            Forgot password?
          </button>
        </div>

        <div className="relative">
          <Lock
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa49f]"
          />

          <input
            id="login-password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
            autoComplete="current-password"
            className="h-13 w-full rounded-2xl border border-[#ddd7cc] bg-white/75 pl-11 pr-12 outline-none transition placeholder:text-[#b1b8b3] focus:border-[#8d9b93] focus:bg-white focus:ring-4 focus:ring-[#dce5dd]"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                (current) => !current,
              )
            }
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-[#89958e] transition hover:bg-[#f0eee8] hover:text-[#27332f]"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-2xl border border-[#ead4cc] bg-[#fbefeb] px-4 py-3 text-sm leading-5 text-[#9b5e50]">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#27332f] px-5 font-medium text-white shadow-[0_12px_30px_rgba(39,51,47,0.18)] transition hover:-translate-y-0.5 hover:bg-[#34433d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          "Opening your space..."
        ) : (
          <>
            Continue to Aurelia
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="pt-3 text-center text-sm text-[#718078]">
        New to Aurelia?{" "}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="font-semibold text-[#27332f] underline decoration-[#bbc5be] underline-offset-4 transition hover:decoration-[#27332f]"
        >
          Create an account
        </button>
      </p>
    </form>
  );
}
