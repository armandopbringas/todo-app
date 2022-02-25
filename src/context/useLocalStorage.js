import { useState ,useEffect } from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
          setItem(parsedItem);
          setLoading(false);
        } else parsedItem = JSON.parse(localStorageItem);
      } catch(error) {
        setError(error);
      }
    }, 1500);
  });

  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };