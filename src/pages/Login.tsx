import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff, Leaf, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      await login(
        email.trim(),
        password,
        remember,
      );

      navigate("/dashboard", { replace: true });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to sign in. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#27332f]">
      <div className="mx-auto flex min-h-screen max-w-7xl">

        <section className="relative hidden w-[48%] overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-[#dfe9dc] via-[#edf1e8] to-[#e8ddd2]" />

          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#cbdcc8] blur-3xl" />

          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[#e6d2c3] blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12">

            <Link to="/" className="flex w-fit items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#27332f] text-white">
                <Leaf size={20} />
              </div>

              <div>
                <p className="font-semibold tracking-tight">
                  Aurelia
                </p>

                <p className="text-xs text-[#718078]">
                  Your gentle workspace
                </p>
              </div>
            </Link>

            <div className="max-w-md">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#78867e]">
                Welcome back
              </p>

              <h1 className="text-6xl font-medium leading-[1] tracking-[-0.06em]">
                Make space for
                <span className="block text-[#708178]">
                  what matters.
                </span>
              </h1>

              <p className="mt-7 max-w-sm text-base leading-7 text-[#718078]">
                Your tasks, notes and moments of focus
                are waiting for you.
              </p>
            </div>

            <p className="text-xs text-[#8a958f]">
              Productivity without the pressure.
            </p>
          </div>
        </section>

        <section className="flex w-full items-center justify-center px-6 py-12 lg:w-[52%]">
          <div className="w-full max-w-md">

            <Link
              to="/"
              className="mb-10 flex w-fit items-center gap-3 lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27332f] text-white">
                <Leaf size={18} />
              </div>

              <p className="font-semibold">
                Aurelia
              </p>
            </Link>

            <div className="mb-8">
              <p className="text-sm text-[#87938c]">
                Sign in
              </p>

              <h2 className="mt-2 text-4xl font-medium tracking-[-0.04em]">
                Welcome back.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#7b8781]">
                Continue where you left off.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#4f5d56]"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa39e]"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-14 w-full rounded-2xl border border-[#ddd8ce] bg-white/80 pl-11 pr-4 text-sm outline-none transition focus:border-[#879a8d] focus:ring-4 focus:ring-[#dce6dc]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[#4f5d56]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa39e]"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-14 w-full rounded-2xl border border-[#ddd8ce] bg-white/80 pl-11 pr-12 text-sm outline-none transition focus:border-[#879a8d] focus:ring-4 focus:ring-[#dce6dc]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#929b96]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-3 text-sm text-[#718078]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) =>
                    setRemember(event.target.checked)
                  }
                  className="h-4 w-4 accent-[#53675c]"
                />

                Remember me
              </label>

              {error && (
                <div className="rounded-2xl border border-[#e8caca] bg-[#fff4f2] px-4 py-3 text-sm text-[#9a5f5a]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#27332f] text-sm font-medium text-white transition hover:bg-[#34433d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Signing in..."
                ) : (
                  <>
                    Enter Aurelia
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#7b8781]">
              New to Aurelia?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#46584f] underline underline-offset-4"
              >
                Create your space
              </Link>
            </p>

            <Link
              to="/"
              className="mt-6 block text-center text-xs text-[#9aa19d]"
            >
              ← Back to Aurelia
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
