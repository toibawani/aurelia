import { useState } from "react";
import {
  BookOpen,
  FileText,
  PenLine,
  Search,
  Sparkles,
} from "lucide-react";

import DashboardLayout from "../../../layouts/DashboardLayout";
import NotesSidebar from "./NotesSidebar";
import NoteCard from "./NoteCard";
import NoteEditor from "./NoteEditor";
import { useNotes } from "../hooks/useNotes";

type NoteFilter = "all" | "pinned" | "archived";

export default function NotesPage() {
  const {
    notes = [],
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
  const [filter, setFilter] = useState<NoteFilter>("all");

  const filteredNotes = notes
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
      const query = search.trim().toLowerCase();

      if (!query) {
        return true;
      }

      return (
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      if (a.pinned !== b.pinned) {
        return a.pinned ? -1 : 1;
      }

      return (
        new Date(b.updatedAt).getTime() -
        new Date(a.updatedAt).getTime()
      );
    });

  function handleCreate() {
    const id = createNote();
    setSelectedId(id);
  }

  return (
    <DashboardLayout>
      <div className="min-h-full pb-10">
        {/* HEADER */}

        <header className="mb-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#dedbd2] bg-[#faf9f5] px-3 py-1.5 text-xs font-medium text-[#7d8882]">
                <BookOpen size={14} />
                Personal journal
              </div>

              <h1 className="text-3xl font-medium tracking-[-0.04em] text-[#303a36] sm:text-4xl">
                Notes & reflections
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#89938e]">
                A quiet place for thoughts, ideas,
                plans, memories, and everything worth
                keeping.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#9aa39e]">
              <FileText size={15} />
              {notes.length}{" "}
              {notes.length === 1 ? "note" : "notes"}
            </div>
          </div>
        </header>

        {/* WORKSPACE */}

        <section className="overflow-hidden rounded-[30px] border border-[#e4e0d7] bg-[#fbfaf7] shadow-[0_20px_70px_rgba(55,63,57,0.07)]">
          <div className="flex min-h-[680px] flex-col lg:flex-row">
            {/* SIDEBAR */}

            <NotesSidebar
              search={search}
              onSearch={setSearch}
              filter={filter}
              onFilter={setFilter}
              onCreate={handleCreate}
            />

            {/* NOTE LIST */}

            <div className="flex w-full shrink-0 flex-col border-b border-[#e5e1d8] bg-[#f5f3ee] lg:w-[285px] lg:border-b-0 lg:border-r">
              <div className="border-b border-[#e5e1d8] px-5 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#929b96]">
                    {filter === "all"
                      ? "All notes"
                      : filter === "pinned"
                        ? "Pinned"
                        : "Archived"}
                  </p>

                  <span className="rounded-full bg-white px-2.5 py-1 text-[11px] text-[#929b96]">
                    {filteredNotes.length}
                  </span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-3">
                {filteredNotes.length > 0 ? (
                  <div className="space-y-2">
                    {filteredNotes.map((note) => (
                      <NoteCard
                        key={note.id}
                        note={note}
                        selected={
                          note.id === selectedId
                        }
                        onSelect={setSelectedId}
                        onPin={togglePinned}
                        onArchive={archiveNote}
                        onDelete={deleteNote}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8eee5] text-[#708077]">
                      {search ? (
                        <Search size={21} />
                      ) : (
                        <PenLine size={21} />
                      )}
                    </div>

                    <h3 className="mt-4 text-sm font-medium text-[#59655f]">
                      {search
                        ? "Nothing found"
                        : filter === "archived"
                          ? "No archived notes"
                          : filter === "pinned"
                            ? "Nothing pinned yet"
                            : "Your journal is waiting"}
                    </h3>

                    <p className="mt-2 max-w-[190px] text-xs leading-5 text-[#929b96]">
                      {search
                        ? "Try another word or phrase."
                        : "Create a note and start capturing what's on your mind."}
                    </p>

                    {!search &&
                      filter !== "archived" &&
                      filter !== "pinned" && (
                        <button
                          type="button"
                          onClick={handleCreate}
                          className="mt-5 rounded-full bg-[#303a36] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#202925]"
                        >
                          Write something
                        </button>
                      )}
                  </div>
                )}
              </div>
            </div>

            {/* EDITOR */}

            <div className="min-w-0 flex-1 bg-[#faf9f5]">
              {selectedNote ? (
                <NoteEditor
                  note={selectedNote}
                  onUpdate={updateNote}
                  onDelete={deleteNote}
                  onPin={togglePinned}
                  onArchive={archiveNote}
                  onColorChange={changeColor}
                />
              ) : (
                <div className="flex min-h-[680px] items-center justify-center px-8 py-16">
                  <div className="max-w-sm text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#e8eee5] text-[#687970]">
                      <Sparkles size={24} />
                    </div>

                    <h2 className="mt-6 text-2xl font-medium tracking-tight text-[#303a36]">
                      Give your thoughts some space.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#89938e]">
                      Choose a note from the list or start
                      a new one. This space is yours.
                    </p>

                    <button
                      type="button"
                      onClick={handleCreate}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#303a36] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#202925]"
                    >
                      <PenLine size={16} />
                      Start writing
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}