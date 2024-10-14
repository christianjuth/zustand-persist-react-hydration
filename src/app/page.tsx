import { SortSelector } from '@/components/sort-selector';
import { DemoList } from '@/components/demo-list';

export default function Home() {
  return (
    <div className="max-w-md p-6 mx-auto">
      <SortSelector />
      <DemoList sort="asc" />
    </div>
  );
}
