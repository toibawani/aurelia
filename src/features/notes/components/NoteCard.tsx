import {
  MoreHorizontal,
  Pin,
} from "lucide-react";

import type { Note } from "../types/note";

interface NoteCardProps {
  note: Note;
  selected: boolean;
  onClick: () => void;
  onPin: () => void;
}

const colors = {
  cream: "bg-[#f5efe4]",
  sage: "bg-[#e5eee4]",
  lavender: "bg-[#ebe7f2]",
  peach: "bg-[#f4e5dc]",
  sky: "bg-[#e1edf1]",
};

export default function NoteCard({
  note,
  selected,
  onClick,
  onPin,
}: NoteCardProps) {
  const preview =
    note.content.trim() ||
    "No content yet...";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-[22px] border p-4 text-left transition ${
        colors[note.color]
      } ${
        selected
          ? "border-[#718078] shadow-sm"
          : "border-transparent hover:-translate-y-0.5 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-medium text-[#303a36]">
            {note.title || "Untitled note"}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#7c8781]">
            {preview}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {note.pinned && (
            <Pin
              size={14}
              className="fill-current text-[#75847c]"
            />
          )}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPin();
            }}
            className="flex h-7 w-7 items-center justify-center rounded-lg opacity-0 transition group-hover:opacity-100 hover:bg-white/50"
            aria-label="Pin note"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-[#929b96]">
        {new Date(
          note.updatedAt,
        ).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        })}
      </p>
    </button>
  );
}
