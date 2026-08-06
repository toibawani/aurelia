import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-5xl font-bold">
        Good Afternoon 👋
      </h1>

      <p className="mt-3 text-stone-500 text-lg">
        Design your day with intention.
      </p>
    </DashboardLayout>
  );
}