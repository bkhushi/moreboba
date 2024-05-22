'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/costants';
import { SideNavItem } from '@/types';

const SideNav = () => {
  return (
    <div className="bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex flex-col">
      <div className="flex flex-col space-y-6 w-screen">
        <Link
          href="/"
          className="flex flex-col space-x-3 items-left justify-left md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
        >
          <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
          <span className="font-bold text-xl hidden md:flex">Logo</span>
        </Link>

        <div className="flex flex-col margin-top:2">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

  return (
    <div className="">
        <Link
          href={item.path}
          className={`flex space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
    </div>
  );
};