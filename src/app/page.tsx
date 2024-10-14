import { SortSelector } from '@/components/sort-selector';
import { DemoList } from '@/components/demo-list';

export default function Home() {
  return (
    <div className="max-w-md p-6 mx-auto space-y-4">
      <p className="italic">Note: The following list is stored in Zustand and persisted to a cookied named preferences. This allows Next.js to read the persisted value during React SSR.</p>

      <div>
        <label className="block font-bold">Sort order:</label>
        <SortSelector />
      </div>

      <div>
        <label className="block font-bold">Items:</label>
        <DemoList />
      </div>
    </div>
  );
}
