import type { Note } from "../types/note";

const NOTES_KEY = "aurelia-notes";

export function getNotes(): Note[] {
  try {
    const stored = localStorage.getItem(NOTES_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as Note[];
  } catch {
    return [];
  }
}

export function saveNotes(notes: Note[]): void {
  try {
    localStorage.setItem(
      NOTES_KEY,
      JSON.stringify(notes),
    );
  } catch {
    // Local storage may be unavailable.
  }
}