cd ~/Documents/aurelia

cat > src/features/notes/types/note.ts <<'EOF'
export type NoteColor =
  | "cream"
  | "sage"
  | "lavender"
  | "peach"
  | "sky";

export interface Note {
  id: string;
  title: string;
  content: string;
  color: NoteColor;
  pinned: boolean;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
}
