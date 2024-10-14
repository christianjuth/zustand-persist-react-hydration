'use client';

import { usePreferencesStore } from '@/store/preferences/hooks';

const LIST = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 5, name: 'E' },
];

export function DemoList() {
  const { sort } = usePreferencesStore();

  const sorted = sort === 'asc' ? LIST : LIST.toReversed();

  return (
    <ul className="divide-y">
      {sorted.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
