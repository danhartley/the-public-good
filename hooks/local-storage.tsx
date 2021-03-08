import { useState, useEffect } from 'preact/hooks';

export const useLocalStorageState = ({key, defaultValue = true}) => {

    const [state, setState] = useState(() => {
        const localStorageValue = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
        return localStorageValue !== null
          ? JSON.parse(localStorageValue)
          : defaultValue;
      });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    });

    return [state, setState];

  };