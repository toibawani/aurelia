import type { ReactNode } from "react";
import { ArrowLeft, Leaf } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  onBack: () => void;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  onBack,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#dce8d9] opacity-60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#eadbd0] opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6">
        <button
          type="button"
          onClick={onBack}
          className="group flex w-fit items-center gap-2 rounded-full px-3 py-2 text-sm text-[#718078] transition hover:bg-white/70 hover:text-[#29332e]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back
        </button>

        <div className="flex flex-1 items-center justify-center py-12">
          <div className="grid w-full max-w-5xl overflow-hidden rounded-[34px] border border-white/80 bg-white/55 shadow-[0_35px_100px_rgba(55,65,60,.10)] backdrop-blur-xl lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative hidden overflow-hidden bg-[#e7eee3] p-10 lg:flex lg:flex-col">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/50 blur-3xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
                  <Leaf size={20} className="text-[#607267]" />
                </div>

                <p className="mt-8 text-xs font-medium tracking-[0.18em] text-[#7a887f]">
                  AURELIA
                </p>

                <h2 className="mt-4 max-w-sm text-4xl font-medium leading-tight tracking-[-0.04em] text-[#29332e]">
                  A quieter way to organize your life.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#718078]">
                  Bring your intentions, tasks and everyday moments into one
                  gentle workspace.
                </p>
              </div>

              <div className="relative mt-auto rounded-[26px] border border-white/70 bg-white/55 p-5">
                <p className="text-sm font-medium text-[#3d4943]">
                  A little reminder
                </p>

                <p className="mt-2 text-sm leading-6 text-[#78857e]">
                  You don't have to do everything today. Just take the next
                  meaningful step.
                </p>
              </div>
            </div>

            <div className="flex items-center p-7 sm:p-10 lg:p-14">
              <div className="w-full">
                <div className="mb-8 lg:hidden">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e5eee2]">
                    <Leaf size={20} className="text-[#607267]" />
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-medium tracking-[0.16em] text-[#8a958f]">
                    WELCOME TO AURELIA
                  </p>

                  <h1 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#29332e] sm:text-4xl">
                    {title}
                  </h1>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#7a857f]">
                    {subtitle}
                  </p>
                </div>

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}