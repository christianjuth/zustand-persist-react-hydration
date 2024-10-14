'use client';

import { usePreferencesStore } from '@/store/preferences/hooks';

export function SortSelector() {
  const {
    sort,
    setSort
  } = usePreferencesStore();

  return (
    <select 
      value={sort} 
      onChange={e => setSort(e.target.value as any)}
      className="border p-2"
    >
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
}
