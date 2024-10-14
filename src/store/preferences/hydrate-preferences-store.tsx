'use client';

import { createJSONStorage } from 'zustand/middleware';
import { store } from './store';
import * as config from './config';

export function hydratePreferencesStore(value: string) {
  const tempStorage = createJSONStorage<config.Store>(() => ({
    getItem: () => value,
    setItem: () => {},
    removeItem: () => {},
  }));

  const initStore = store.persist.getOptions().storage;

  store.persist.setOptions({
    storage: tempStorage,
  });

  store.persist.rehydrate();

  store.persist.setOptions({
    storage: initStore,
  });
}

export function HydratePreferencesStore({
  preferences,
  children,
}: {
  preferences: string | null;
  children: React.ReactNode;
}) {
  hydratePreferencesStore(preferences ?? '');
  return <>{children}</>;
}
