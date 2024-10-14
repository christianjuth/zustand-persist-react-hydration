import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
import * as config from './config';

const storage = createJSONStorage<config.Store>(() => ({
  getItem: (name) => getCookie(name) ?? null,
  setItem: (name, value) => setCookie(name, value),
  removeItem: (name) => removeCookie(name),
}));

export const store = create(
  persist<config.Store>(
    (set, get) => ({
      sort: 'desc',
      setSort: (sort) => set({ sort }),
    }), 
    {
      name: config.storageKey,
      storage,
    }
  )
);
