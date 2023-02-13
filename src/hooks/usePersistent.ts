import { useEffect, useState } from 'react';

export function usePersistent(keyStorage: string) {
  const [value, setValue] = useState((): boolean => {
    const valueLocalStorage = localStorage.getItem(keyStorage);
    return valueLocalStorage === 'true';
  });

  useEffect(() => {
    localStorage.setItem(keyStorage, String(value));
  }, [value]);

  return { value, setValue };
}
