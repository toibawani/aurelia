import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);

      if (stored) {
        return JSON.parse(stored) as T;
      }

      return initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value),
      );
    } catch {
      // Ignore local storage errors.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
