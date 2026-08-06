import { Home, CheckSquare, Sprout, BarChart3, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: Home },
  { name: "Tasks", path: "/dashboard/tasks", icon: CheckSquare },
  { name: "Garden", path: "/dashboard/garden", icon: Sprout },
  { name: "Insights", path: "/dashboard/insights", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-stone-200 p-6">
      <h1 className="text-3xl font-bold text-stone-900">
        Aurelia
      </h1>

      <p className="text-stone-500 text-sm mt-2">
        Design your day with intention
      </p>

      <nav className="mt-10 flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-100"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}