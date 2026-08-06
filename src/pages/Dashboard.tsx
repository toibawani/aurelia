import DashboardLayout from "../layouts/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <WelcomeCard />
      </div>
    </DashboardLayout>
  );
}