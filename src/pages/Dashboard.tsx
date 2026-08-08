import {
  CloudSun,
  Flame,
  Target,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <WelcomeCard />

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-stone-900">
              Your day at a glance
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              A simple view of what matters today.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <StatCard
              label="Focus Score"
              value="82%"
              description="You're having a focused day."
              icon={Target}
            />

            <StatCard
              label="Life Weather"
              value="Calm"
              description="Your current energy feels balanced."
              icon={CloudSun}
            />

            <StatCard
              label="Daily Streak"
              value="7 days"
              description="Keep showing up tomorrow."
              icon={Flame}
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}