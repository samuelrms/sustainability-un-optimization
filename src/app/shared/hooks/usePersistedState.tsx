import { useEffect, useState } from "react";
import { TResponseUsePersistedState } from "../../types";

export function usePersistedState<T>(
  key: string,
  defaultValue: any,
): TResponseUsePersistedState<T> {
  const [state, setState] = useState(() => {
    const getLocalTheme = localStorage.getItem(key);

    if (getLocalTheme) {
      return JSON.parse(getLocalTheme);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
