import { useEffect, useState } from 'react';
import { store } from './store';

export function usePreferencesStore() {
  const [_, setSignal] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSignal(s => s + 1);
    });
    return unsubscribe;
  }, []);
    
  return store.getState();
}
