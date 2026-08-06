import Card from "../ui/Card";
import { ArrowRight, Target } from "lucide-react";

export default function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <Card className="bg-gradient-to-br from-stone-900 to-stone-700 text-white border-0">
      <p className="text-stone-300">
        {greeting}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Design your day with intention.
      </h1>

      <p className="mt-4 text-stone-300 max-w-xl leading-7">
        Every meaningful achievement begins with one deliberate step.
        Focus on what matters most today.
      </p>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/10 p-3">
            <Target size={22} />
          </div>

          <div>
            <p className="text-sm text-stone-300">
              Today's Mission
            </p>

            <p className="font-semibold">
              Complete your top 3 priorities
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-stone-900 transition hover:scale-105">
          Start Day
          <ArrowRight size={18} />
        </button>
      </div>
    </Card>
  );
}