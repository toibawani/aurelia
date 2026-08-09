import { useEffect, useMemo, useState } from "react";

import {
  getNotes,
  saveNotes,
} from "../utils/noteStorage";

import type {
  Note,
  NoteColor,
} from "../types/note";

export function useNotes() {
  const [notes, setNotes] =
    useState<Note[]>(getNotes);

  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const selectedNote = useMemo(
    () =>
      notes.find(
        (note) => note.id === selectedId,
      ) ?? null,
    [notes, selectedId],
  );

  function createNote() {
    const now = new Date().toISOString();

    const note: Note = {
      id: crypto.randomUUID(),
      title: "Untitled note",
      content: "",
      color: "cream",
      pinned: false,
      archived: false,
      createdAt: now,
      updatedAt: now,
    };

    setNotes((current) => [
      note,
      ...current,
    ]);

    setSelectedId(note.id);

    return note.id;
  }

  function updateNote(
    id: string,
    updates: Partial<Note>,
  ) {
    setNotes((current) =>
      current.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updates,
              updatedAt:
                new Date().toISOString(),
            }
          : note,
      ),
    );
  }

  function deleteNote(id: string) {
    setNotes((current) =>
      current.filter(
        (note) => note.id !== id,
      ),
    );

    if (selectedId === id) {
      setSelectedId(null);
    }
  }

  function togglePinned(id: string) {
    setNotes((current) =>
      current.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
              updatedAt:
                new Date().toISOString(),
            }
          : note,
      ),
    );
  }

  function archiveNote(id: string) {
    setNotes((current) =>
      current.map((note) =>
        note.id === id
          ? {
              ...note,
              archived: true,
              updatedAt:
                new Date().toISOString(),
            }
          : note,
      ),
    );

    if (selectedId === id) {
      setSelectedId(null);
    }
  }

  function changeColor(
    id: string,
    color: NoteColor,
  ) {
    updateNote(id, { color });
  }

  return {
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
  };
}
