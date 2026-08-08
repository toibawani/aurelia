import {
  ArrowRight,
  Check,
  Leaf,
  Moon,
  Sparkles,
  Waves,
} from "lucide-react";

interface LandingProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export default function Landing({
  onGetStarted,
  onLogin,
}: LandingProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#27332f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#27332f] text-white shadow-lg">
            <Sparkles size={17} />
          </div>

          <div>
            <p className="font-semibold tracking-tight">
              Aurelia
            </p>
            <p className="text-[11px] text-[#87938c]">
              Your gentle workspace
            </p>
          </div>
        </div>

        <button
          onClick={onLogin}
          className="rounded-full border border-[#d7d1c6] bg-white/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-white"
        >
          Log in
        </button>
      </nav>

      <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-16 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#dce7d9] blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#eadbd0] blur-3xl" />

        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8d3c9] bg-white/60 px-4 py-2 text-xs text-[#718078] backdrop-blur">
            <Leaf size={14} />
            Productivity without the pressure
          </div>

          <h1 className="max-w-3xl text-6xl font-medium leading-[.95] tracking-[-0.06em] sm:text-7xl lg:text-[86px]">
            Get things done.
            <br />
            <span className="text-[#75847c]">
              Stay human.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#718078]">
            Aurelia brings your tasks, energy,
            focus and moments of calm into one
            beautifully simple workspace.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={onGetStarted}
              className="group flex items-center gap-3 rounded-full bg-[#27332f] px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_35px_rgba(39,51,47,.18)] transition hover:-translate-y-1 hover:bg-[#34433d]"
            >
              Create your space

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={onLogin}
              className="rounded-full border border-[#d3cec4] bg-white/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:bg-white"
            >
              I already have an account
            </button>
          </div>

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

        <div className="relative z-10">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-[#d8e5d6] blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-[#faf9f5]/90 p-6 shadow-[0_35px_90px_rgba(61,66,58,.14)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#8a958f]">
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

              <div className="mt-8 rounded-[26px] bg-[#e9f0e5] p-6">
                <p className="text-sm text-[#66766b]">
                  Life weather
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-medium">
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
                      className="flex items-center gap-3 rounded-2xl bg-[#f4f2ed] px-4 py-3"
                    >
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
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
                            : ""
                        }`}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-[24px] bg-[#f1e8df] p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">
                  🌿
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Don't rush this one.
                  </p>

                  <p className="text-xs text-[#827d77]">
                    Progress still counts when it's quiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
