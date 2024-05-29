'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/libs/utils';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `flex sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 flex-end`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] justify-end ml-auto  px-4">
        <div className="space-x-10">

          <Link
            href="/cart"
            className="flex flex-col space-x-10 items-center justify-center md:hidden px-10"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex "><svg width="50" height="50" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75 1.00214C1.33579 1.00214 1 1.33792 1 1.75214C1 2.16635 1.33579 2.50214 1.75 2.50214H3.58486L4.82436 7.6151C3.20095 8.02725 2 9.49838 2 11.25C2 11.6642 2.33579 12 2.75 12H13.25C13.6642 12 14 11.6642 14 11.25C14 10.8358 13.6642 10.5 13.25 10.5H3.62803C3.93691 9.6261 4.77034 9 5.75 9H12.25C12.598 9 12.9003 8.76056 12.9801 8.42177L13.8259 4.82715C13.8722 4.63021 13.837 4.42291 13.7283 4.25229C13.6195 4.08168 13.4465 3.96223 13.2484 3.92106C10.6585 3.38279 7.98556 3.07227 5.25171 3.01118L4.90365 1.57544C4.8221 1.23903 4.52091 1.00214 4.17476 1.00214H1.75Z" fill="black" />
              <path d="M5 14C5 14.5523 4.55228 15 4 15C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13C4.55228 13 5 13.4477 5 14Z" fill="black" />
              <path d="M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z" fill="black" />
            </svg></span>
          </Link>
        </div>

        <div className="hidden md:block justify-content:flex-end">
          <Link href="/login"
          className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-end text-center">
            <span className="font-semibold text-lg">Admin</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;