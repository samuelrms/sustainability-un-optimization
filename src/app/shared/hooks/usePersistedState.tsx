import { useEffect, useState } from "react";

export const usePersistedState = (key: string, defaultValue: any) => {
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
};
