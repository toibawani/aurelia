import { useState } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

import { useAuth } from "../hooks/useAuth";

interface SignupFormProps {
  onSwitchToLogin: () => void;
  onSuccess: () => void;
}

export default function SignupForm({
  onSwitchToLogin,
  onSuccess,
}: SignupFormProps) {
  const { signUp } = useAuth();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const passwordStrong =
    password.length >= 8;

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("What should we call you?");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!passwordStrong) {
      setError(
        "Your password needs at least 8 characters.",
      );
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      signUp({
        name,
        email,
        password,
      });

      setLoading(false);
      onSuccess();
    }, 600);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="signup-name"
          className="mb-2 block text-sm font-medium"
        >
          Your name
        </label>

        <div className="relative">
          <User
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa49f]"
          />

          <input
            id="signup-name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="How should we call you?"
            autoComplete="name"
            className="h-13 w-full rounded-2xl border border-[#ddd7cc] bg-white/75 pl-11 pr-4 outline-none transition placeholder:text-[#b1b8b3] focus:border-[#8d9b93] focus:bg-white focus:ring-4 focus:ring-[#dce5dd]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="signup-email"
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
            id="signup-email"
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
        <label
          htmlFor="signup-password"
          className="mb-2 block text-sm font-medium"
        >
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa49f]"
          />

          <input
            id="signup-password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="At least 8 characters"
            autoComplete="new-password"
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
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full ${
              passwordStrong
                ? "bg-[#dce8dc] text-[#506b58]"
                : "bg-[#ebe8e0] text-[#a3aaa5]"
            }`}
          >
            <Check size={12} />
          </span>

          <span className="text-[#7b8781]">
            Use at least 8 characters
          </span>
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
          "Creating your space..."
        ) : (
          <>
            Create my Aurelia
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="pt-3 text-center text-sm text-[#718078]">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-semibold text-[#27332f] underline decoration-[#bbc5be] underline-offset-4 transition hover:decoration-[#27332f]"
        >
          Log in
        </button>
      </p>

      <p className="text-center text-xs leading-5 text-[#9aa39e]">
        By creating an account, you agree to
        use Aurelia as a space for your own
        focus and wellbeing.
      </p>
    </form>
  );
}
