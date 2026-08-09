import {
  ArrowRight,
  Check,
  Leaf,
  Moon,
  Waves,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf7f2] text-[#27332f]">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-[#dce7d9] opacity-60 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-[#eadbd0] opacity-60 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#eee8dc] opacity-40 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#27332f] text-white shadow-lg transition duration-300 group-hover:-translate-y-0.5">
            <Leaf size={18} />
          </div>

          <div className="text-left">
            <p className="font-semibold tracking-tight">
              Aurelia
            </p>

            <p className="text-[11px] text-[#87938c]">
              Your gentle workspace
            </p>
          </div>
        </button>

        <button
          onClick={() => navigate("/login")}
          className="rounded-full border border-[#d7d1c6] bg-white/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
        >
          Log in
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-16 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        {/* Left */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8d3c9] bg-white/60 px-4 py-2 text-xs text-[#718078] shadow-sm backdrop-blur">
            <Leaf size={14} />
            Productivity without the pressure
          </div>

          <h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[86px]">
            Get things done.
            <br />

            <span className="text-[#75847c]">
              Stay human.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#718078]">
            Aurelia brings your tasks, energy, focus,
            reflections and moments of calm into one
            beautifully simple workspace.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="group flex items-center gap-3 rounded-full bg-[#27332f] px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_35px_rgba(39,51,47,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#34433d] hover:shadow-[0_20px_40px_rgba(39,51,47,.22)]"
            >
              Create your space

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => navigate("/login")}
              className="rounded-full border border-[#d3cec4] bg-white/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-sm"
            >
              I already have an account
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#7b8781]">
            <span className="flex items-center gap-2">
              <Check size={15} />
              Simple by design
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} />
              Your data stays yours
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} />
              Built for real days
            </span>
          </div>
        </div>

        {/* Right preview */}
        <div className="relative z-10">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[#d8e5d6] opacity-70 blur-2xl" />

            <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-[#eadbd0] opacity-70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-[#faf9f5]/90 p-6 shadow-[0_35px_90px_rgba(61,66,58,.14)] backdrop-blur-xl">
              {/* Preview header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] text-[#8a958f]">
                    TODAY
                  </p>

                  <h2 className="mt-1 text-2xl font-medium tracking-tight">
                    Your pace
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5eee2]">
                  <Waves size={19} />
                </div>
              </div>

              {/* Life weather */}
              <div className="mt-8 rounded-[26px] bg-[#e9f0e5] p-6">
                <p className="text-sm text-[#66766b]">
                  Life weather
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-medium tracking-tight">
                      Clear
                    </p>

                    <p className="mt-1 text-sm text-[#718078]">
                      Good energy today
                    </p>
                  </div>

                  <span className="text-5xl">
                    ☀️
                  </span>
                </div>
              </div>

              {/* Focus */}
              <div className="mt-5 rounded-[26px] border border-[#e4dfd5] bg-white/70 p-5">
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    Today's focus
                  </p>

                  <Moon
                    size={17}
                    className="text-[#8b9690]"
                  />
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "Finish project proposal",
                    "Read for 20 minutes",
                    "Take an evening walk",
                  ].map((task, index) => (
                    <div
                      key={task}
                      className="flex items-center gap-3 rounded-2xl bg-[#f4f2ed] px-4 py-3 transition hover:bg-[#eeece6]"
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          index === 0
                            ? "border-[#6d8174] bg-[#6d8174] text-white"
                            : "border-[#cbd0cb]"
                        }`}
                      >
                        {index === 0 && (
                          <Check size={12} />
                        )}
                      </div>

                      <span
                        className={`text-sm ${
                          index === 0
                            ? "text-[#9aa39e] line-through"
                            : "text-[#4e5954]"
                        }`}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gentle reminder */}
              <div className="mt-5 flex items-center gap-3 rounded-[24px] bg-[#f1e8df] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70">
                  🌿
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Don't rush this one.
                  </p>

                  <p className="text-xs leading-5 text-[#827d77]">
                    Progress still counts when it's quiet.
                  </p>
                </div>
              </div>

              {/* Mini progress */}
              <div className="mt-5 rounded-[24px] border border-[#e5e0d7] bg-white/50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#7b8781]">
                    Daily rhythm
                  </p>

                  <p className="text-xs font-medium text-[#526159]">
                    72%
                  </p>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8e5de]">
                  <div className="h-full w-[72%] rounded-full bg-[#7b8d82]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom statement */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="border-t border-[#ded8cd] pt-8">
          <p className="max-w-2xl text-sm leading-7 text-[#87918b]">
            A calmer place to plan, focus, reflect and
            keep moving — without turning your life into
            another productivity contest.
          </p>
        </div>
      </section>
    </main>
  );
}