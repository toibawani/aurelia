import {
  Archive,
  Check,
  Palette,
  Pin,
  Trash2,
} from "lucide-react";

import type {
  Note,
  NoteColor,
} from "../types/note";

interface NoteEditorProps {
  note: Note | null;
  onUpdate: (
    id: string,
    updates: Partial<Note>,
  ) => void;
  onDelete: (id: string) => void;
  onPin: (id: string) => void;
  onArchive: (id: string) => void;
  onColorChange: (
    id: string,
    color: NoteColor,
  ) => void;
}

const colors: {
  id: NoteColor;
  label: string;
  className: string;
}[] = [
  {
    id: "cream",
    label: "Cream",
    className: "bg-[#f5efe4]",
  },
  {
    id: "sage",
    label: "Sage",
    className: "bg-[#e5eee4]",
  },
  {
    id: "lavender",
    label: "Lavender",
    className: "bg-[#ebe7f2]",
  },
  {
    id: "peach",
    label: "Peach",
    className: "bg-[#f4e5dc]",
  },
  {
    id: "sky",
    label: "Sky",
    className: "bg-[#e1edf1]",
  },
];

const editorBackgrounds: Record<
  NoteColor,
  string
> = {
  cream: "bg-[#fbf8f1]",
  sage: "bg-[#f3f7f1]",
  lavender: "bg-[#f7f4fa]",
  peach: "bg-[#faf3ee]",
  sky: "bg-[#f2f7f8]",
};

export default function NoteEditor({
  note,
  onUpdate,
  onDelete,
  onPin,
  onArchive,
  onColorChange,
}: NoteEditorProps) {
  if (!note) {
    return (
      <section className="flex min-h-[620px] flex-1 items-center justify-center bg-[#faf9f5] p-8">
        <div className="max-w-sm text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#e9eee9] text-2xl">
            ✍️
          </div>

          <h2 className="mt-5 text-xl font-medium tracking-tight text-[#303a36]">
            Nothing open yet
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#89938e]">
            Choose a note from the collection
            or create a new one to start
            writing.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`flex min-h-[620px] flex-1 flex-col ${editorBackgrounds[note.color]}`}
    >
      <header className="flex items-center justify-between border-b border-black/[.06] px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 text-xs text-[#77827c]">
            <Check size={13} />
            Saved automatically
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onPin(note.id)}
            className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
              note.pinned
                ? "bg-[#dfe8dc] text-[#596b61]"
                : "hover:bg-white/60"
            }`}
            title={
              note.pinned
                ? "Unpin note"
                : "Pin note"
            }
          >
            <Pin
              size={16}
              className={
                note.pinned
                  ? "fill-current"
                  : ""
              }
            />
          </button>

          <button
            type="button"
            onClick={() => onArchive(note.id)}
            className="flex h-9 w-9 items-center justify-center rounded-xl transition hover:bg-white/60"
            title="Archive note"
          >
            <Archive size={16} />
          </button>

          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Delete this note?",
                )
              ) {
                onDelete(note.id);
              }
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-[#9a7771] transition hover:bg-[#f2dfda]"
            title="Delete note"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-8 py-10">
        <input
          value={note.title}
          onChange={(event) =>
            onUpdate(note.id, {
              title: event.target.value,
            })
          }
          placeholder="Untitled note"
          className="w-full border-0 bg-transparent text-4xl font-medium tracking-[-0.04em] text-[#303a36] outline-none placeholder:text-[#b0b7b2]"
        />

        <div className="mt-4 flex items-center gap-2 text-xs text-[#929b96]">
          <span>
            Updated{" "}
            {new Date(
              note.updatedAt,
            ).toLocaleString(undefined, {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
        </div>

        <textarea
          value={note.content}
          onChange={(event) =>
            onUpdate(note.id, {
              content: event.target.value,
            })
          }
          placeholder="Start writing..."
          className="mt-10 min-h-[390px] flex-1 resize-none border-0 bg-transparent text-[16px] leading-8 text-[#53615a] outline-none placeholder:text-[#b4bbb6]"
          spellCheck
        />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[.06] pt-5">
          <div className="flex items-center gap-2">
            <Palette
              size={15}
              className="text-[#89938e]"
            />

            <span className="mr-1 text-xs text-[#89938e]">
              Note color
            </span>

            {colors.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() =>
                  onColorChange(
                    note.id,
                    color.id,
                  )
                }
                title={color.label}
                className={`h-6 w-6 rounded-full border-2 ${
                  color.className
                } ${
                  note.color === color.id
                    ? "border-[#5d6d64]"
                    : "border-white"
                }`}
              />
            ))}
          </div>

          <span className="text-xs text-[#9aa39e]">
            {note.content.length} characters
          </span>
        </div>
      </div>
    </section>
  );
}
