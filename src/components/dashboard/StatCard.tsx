import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export default function StatCard({
  label,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-stone-500">{label}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-stone-900">
            {value}
          </p>
        </div>

        <div className="rounded-2xl bg-stone-100 p-3">
          <Icon size={20} className="text-stone-700" />
        </div>
      </div>

      <p className="mt-4 text-sm text-stone-500">{description}</p>
    </div>
  );
}