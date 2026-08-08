import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Cloud,
  Sparkles,
} from "lucide-react";

interface AuthShellProps {
  children: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}

export default function AuthShell({
  children,
  eyebrow,
  title,
  description,
}: AuthShellProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#27332f]">
      <div className="mx-auto grid min-h-screen max-w-[1500px] lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden overflow-hidden p-10 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#d9e4d6] blur-3xl" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#ead8c8] blur-3xl" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#27332f] text-white shadow-lg">
                <Sparkles size={19} />
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight">
                  Aurelia
                </p>

                <p className="text-xs text-[#718078]">
                  Your gentle workspace
                </p>
              </div>
            </div>

            <div className="rounded-full border border-[#d9d3c8] bg-white/60 px-4 py-2 text-xs text-[#718078] backdrop-blur">
              Made for humans
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm">
                <Cloud size={18} />
              </div>

              <span className="text-sm text-[#718078]">
                A calmer way to get things done.
              </span>
            </div>

            <h2 className="text-6xl font-medium leading-[0.98] tracking-[-0.055em]">
              Make room for
              <br />
              what matters.
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-[#718078]">
              Aurelia brings your tasks, focus,
              energy and little moments of calm
              into one thoughtful space.
            </p>

            <div className="mt-10 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-[#27332f] px-4 py-2 text-white">
                Less noise
              </span>

              <span className="rounded-full border border-[#d7d1c6] bg-white/50 px-4 py-2">
                More intention
              </span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-[#718078]">
            <span>© Aurelia</span>

            <span className="flex items-center gap-1">
              Thoughtfully designed
              <ArrowUpRight size={13} />
            </span>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-16">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#27332f] text-white">
                  <Sparkles size={17} />
                </div>

                <span className="text-xl font-semibold">
                  Aurelia
                </span>
              </div>
            </div>

            <p className="mb-3 text-sm font-medium text-[#87938c]">
              {eyebrow}
            </p>

            <h1 className="text-4xl font-medium tracking-[-0.04em]">
              {title}
            </h1>

            <p className="mt-3 leading-6 text-[#718078]">
              {description}
            </p>

            <div className="mt-8">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}