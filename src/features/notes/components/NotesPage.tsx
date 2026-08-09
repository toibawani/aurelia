import { useMemo, useState } from "react";
import { FileText, Search } from "lucide-react";

import { useNotes } from "../hooks/useNotes";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";
import NotesSidebar from "./NotesSidebar";

type NoteFilter = "all" | "pinned" | "archived";

export default function NotesPage() {
  const {
    notes,
    selectedId,
    selectedNote,
    setSelectedId,
    createNote,
    updateNote,
    deleteNote,
    togglePinned,
    archiveNote,
    changeColor,
  } = useNotes();

  const [search, setSearch] = useState("");
  const [filter, setFilter] =
    useState<NoteFilter>("all");

  const visibleNotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notes
      .filter((note) => {
        if (filter === "pinned") {
          return note.pinned && !note.archived;
        }

        if (filter === "archived") {
          return note.archived;
        }

        return !note.archived;
      })
      .filter((note) => {
        if (!query) return true;

        return (
          note.title
            .toLowerCase()
            .includes(query) ||
          note.content
            .toLowerCase()
            .includes(query)
        );
      })
      .sort(
        (a, b) =>
          Number(b.pinned) - Number(a.pinned) ||
          new Date(b.updatedAt).getTime() -
            new Date(a.updatedAt).getTime(),
      );
  }, [notes, search, filter]);

  return (
    <div className="min-h-screen bg-[#f7f6f2] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-[#89938e]">
            <FileText size={16} />
            Personal workspace
          </div>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-medium tracking-[-0.04em] text-[#303a36]">
                Notes
              </h1>

              <p className="mt-1 text-sm text-[#89938e]">
                Keep the thoughts worth coming back to.
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-[#e1ded5] bg-white/60 px-4 py-2 text-xs text-[#89938e] sm:flex">
              <Search size={14} />
              Search your thoughts
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#e2dfd6] bg-white/70 shadow-[0_20px_70px_rgba(55,65,60,0.06)] backdrop-blur">
          <div className="flex min-h-[650px] flex-col lg:flex-row">
            <NotesSidebar
              search={search}
              onSearch={setSearch}
              filter={filter}
              onFilter={setFilter}
              onCreate={createNote}
            />

            <div className="w-full border-b border-[#e5e1d8] bg-[#f9f8f4] lg:w-[330px] lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-[#39453f]">
                    {filter === "all"
                      ? "All notes"
                      : filter === "pinned"
                        ? "Pinned"
                        : "Archived"}
                  </p>

                  <p className="mt-0.5 text-xs text-[#9aa39e]">
                    {visibleNotes.length}{" "}
                    {visibleNotes.length === 1
                      ? "note"
                      : "notes"}
                  </p>
                </div>
              </div>

              <div className="space-y-3 overflow-y-auto px-4 pb-5 lg:max-h-[570px]">
                {visibleNotes.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-[#dcd8ce] px-5 py-10 text-center">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e9eee9]">
                      📝
                    </div>

                    <p className="mt-3 text-sm font-medium text-[#59655f]">
                      No notes here
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#9aa39e]">
                      Create a note and give your
                      thoughts somewhere to land.
                    </p>
                  </div>
                ) : (
                  visibleNotes.map((note) => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      selected={
                        note.id === selectedId
                      }
                      onClick={() =>
                        setSelectedId(note.id)
                      }
                      onPin={() =>
                        togglePinned(note.id)
                      }
                    />
                  ))
                )}
              </div>
            </div>

            <NoteEditor
              note={selectedNote}
              onUpdate={updateNote}
              onDelete={deleteNote}
              onPin={togglePinned}
              onArchive={archiveNote}
              onColorChange={changeColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
