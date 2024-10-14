export const storageKey = 'preferences';

export type Store = {
  sort: 'asc' | 'desc';
  setSort: (sort: 'asc' | 'desc') => void;
};
