import {
  Home,
  CheckSquare,
  BookOpen,
  Sprout,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Tasks",
    path: "/dashboard/tasks",
    icon: CheckSquare,
  },
  {
    name: "Notes",
    path: "/dashboard/notes",
    icon: BookOpen,
  },
  {
    name: "Garden",
    path: "/dashboard/garden",
    icon: Sprout,
  },
  {
    name: "Insights",
    path: "/dashboard/insights",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-stone-200 bg-[#fbfaf7] p-5">
      <div>
        <h1 className="text-2xl font-semibold text-stone-900">
          Aurelia
        </h1>

        <p className="mt-2 text-sm text-stone-500">
          Design your day with intention
        </p>
      </div>

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
