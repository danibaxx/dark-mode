import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key, initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage([key, initialValue])

  useEffect(() => {
    function changeBody() {
      const dmEl = document.getElementById('body');
      dmEl.classList.add('dark-mode')
    }

    if (useLocalStorage === true) {
      return changeBody();
    } else {
      return (useLocalStorage === false);
    }  
  })

  return [storedValue, setValue];
};