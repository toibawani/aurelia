import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

interface SignupFormProps {
  onSignup: () => void;
  onLogin: () => void;
}

export default function SignupForm({
  onSignup,
  onLogin,
}: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Please tell us your name.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Your password should be at least 6 characters.");
      return;
    }

    setError("");
    onSignup();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="signup-name"
          className="mb-2 block text-sm font-medium text-[#46534c]"
        >
          Your name
        </label>

        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
          placeholder="What should Aurelia call you?"
          autoComplete="name"
          className="h-12 w-full rounded-2xl border border-[#dedbd3] bg-white/70 px-4 text-sm outline-none transition placeholder:text-[#a3aaa5] focus:border-[#91a397] focus:bg-white focus:ring-4 focus:ring-[#dfe9dc]"
        />
      </div>

      <div>
        <label
          htmlFor="signup-email"
          className="mb-2 block text-sm font-medium text-[#46534c]"
        >
          Email
        </label>

        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 w-full rounded-2xl border border-[#dedbd3] bg-white/70 px-4 text-sm outline-none transition placeholder:text-[#a3aaa5] focus:border-[#91a397] focus:bg-white focus:ring-4 focus:ring-[#dfe9dc]"
        />
      </div>

      <div>
        <label
          htmlFor="signup-password"
          className="mb-2 block text-sm font-medium text-[#46534c]"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            placeholder="At least 6 characters"
            autoComplete="new-password"
            className="h-12 w-full rounded-2xl border border-[#dedbd3] bg-white/70 px-4 pr-12 text-sm outline-none transition placeholder:text-[#a3aaa5] focus:border-[#91a397] focus:bg-white focus:ring-4 focus:ring-[#dfe9dc]"
          />

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#8a958f] transition hover:bg-[#f1f3ef]"
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
        Create my space
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>

      <p className="pt-2 text-center text-sm text-[#7d8882]">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onLogin}
          className="font-medium text-[#52675b] underline decoration-[#bdc9bf] underline-offset-4 transition hover:text-[#293630]"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}