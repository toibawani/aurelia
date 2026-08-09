import {
  Archive,
  FileText,
  Pin,
  Plus,
  Search,
} from "lucide-react";

type NoteFilter =
  | "all"
  | "pinned"
  | "archived";

interface NotesSidebarProps {
  search: string;
  onSearch: (value: string) => void;
  filter: NoteFilter;
  onFilter: (filter: NoteFilter) => void;
  onCreate: () => void;
}

export default function NotesSidebar({
  search,
  onSearch,
  filter,
  onFilter,
  onCreate,
}: NotesSidebarProps) {
  return (
    <aside className="w-full shrink-0 border-b border-[#e5e1d8] bg-[#fbfaf7] p-4 lg:w-[210px] lg:border-b-0 lg:border-r">
      <button
        type="button"
        onClick={onCreate}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#303a36] px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#202925]"
      >
        <Plus size={17} />
        New note
      </button>

      <div className="relative mt-4">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa39e]"
        />

        <input
          value={search}
          onChange={(event) =>
            onSearch(event.target.value)
          }
          placeholder="Search notes"
          className="w-full rounded-xl border border-[#e2dfd6] bg-white py-2.5 pl-9 pr-3 text-xs text-[#46534c] outline-none transition placeholder:text-[#a6ada8] focus:border-[#aeb9b1] focus:ring-2 focus:ring-[#e9eee9]"
        />
      </div>

      <nav className="mt-5 space-y-1">
        <button
          type="button"
          onClick={() => onFilter("all")}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
            filter === "all"
              ? "bg-[#e9eee9] font-medium text-[#3e4c44]"
              : "text-[#7d8882] hover:bg-[#f3f1ec]"
          }`}
        >
          <FileText size={16} />
          <span>All notes</span>
        </button>

        <button
          type="button"
          onClick={() => onFilter("pinned")}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
            filter === "pinned"
              ? "bg-[#e9eee9] font-medium text-[#3e4c44]"
              : "text-[#7d8882] hover:bg-[#f3f1ec]"
          }`}
        >
          <Pin size={16} />
          <span>Pinned</span>
        </button>

        <button
          type="button"
          onClick={() =>
            onFilter("archived")
          }
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
            filter === "archived"
              ? "bg-[#e9eee9] font-medium text-[#3e4c44]"
              : "text-[#7d8882] hover:bg-[#f3f1ec]"
          }`}
        >
          <Archive size={16} />
          <span>Archived</span>
        </button>
      </nav>

      <div className="mt-8 rounded-2xl bg-[#eef2ec] p-4">
        <p className="text-xs font-medium text-[#59675f]">
          A quiet place
        </p>

        <p className="mt-1 text-[11px] leading-5 text-[#89958e]">
          Capture ideas, reflections,
          plans, and everything you don't
          want to lose.
        </p>
      </div>
    </aside>
  );
}
