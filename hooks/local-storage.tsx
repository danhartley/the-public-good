import { useState, useEffect } from 'react';

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

export const getLocalStorageState = (key) => {

    let localStorageValue = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
    
    localStorageValue === null
        ? null
        : JSON.parse(localStorageValue)

    return JSON.parse(localStorageValue);

  };