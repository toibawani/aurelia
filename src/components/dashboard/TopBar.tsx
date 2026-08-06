import { Bell, Search, UserCircle } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-8">
      <div className="relative w-96">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-2xl bg-stone-100 py-3 pl-12 pr-4 outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-stone-600" />

        <div className="flex items-center gap-3">
          <UserCircle size={38} className="text-stone-700" />

          <div>
            <p className="font-semibold">Welcome</p>
            <p className="text-sm text-stone-500">Aurelia User</p>
          </div>
        </div>
      </div>
    </header>
  );
}