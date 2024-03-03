'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'


const SortBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const prevSort = searchParams.get('_sort');

  const onClick = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set("_sort", prevSort === 'Year'? '-Year' : 'Year');

    const search = current.toString();

    router.push(`${pathname}?${search}`);
    router.refresh()
  }

  return (
    <div className={'flex h-[50px] bg-sky-500/50 hover:bg-sky-500 justify-end items-center px-20 rounded-2xl'}>
        <button onClick={onClick} className="text-2xl font-bold text-white">
          {`Сортировка года выпуска: по ${prevSort === 'Year' ? "возрастанию" : "убыванию"}`}
        </button>
    </div>
  );
}

export default SortBar;
