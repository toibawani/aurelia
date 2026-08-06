import {
  Home,
  CheckSquare,
  Sprout,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    path: "/dashboard/tasks",
  },
  {
    title: "Garden",
    icon: Sprout,
    path: "/dashboard/garden",
  },
  {
    title: "Insights",
    icon: BarChart3,
    path: "/dashboard/insights",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-stone-200 flex flex-col">
      <div className="p-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Aurelia
        </h1>

        <p className="text-sm text-stone-500 mt-2">
          Personal Operating System
        </p>
      </div>

      <nav className="px-4 flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-100"
                }`
              }
            >
              <Icon size={20} />
              {link.title}
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto p-6">
        <div className="rounded-3xl bg-stone-900 text-white p-5">
          <p className="text-sm opacity-80">
            Today's Quote
          </p>

          <p className="mt-3 text-sm leading-6">
            Small consistent actions create extraordinary results.
          </p>
        </div>
      </div>
    </aside>
  );
}