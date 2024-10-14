import { createStore } from 'zustand/vanilla';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import * as config from './config';

const storage = createJSONStorage<config.Store>(() => ({
  getItem: (name) => getCookie(name) ?? null,
  setItem: (name, value) => setCookie(name, value),
  removeItem: (name) => removeCookie(name),
}));

export const store = createStore(
  persist<config.Store>(
    (set, get) => ({
      sort: 'asc',
      setSort: (sort) => set({ sort }),
    }), 
    {
      name: config.storageKey,
      storage,
    }
  )
);
