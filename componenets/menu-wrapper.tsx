import { ReactNode } from 'react';

export default function MenuWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {children}
    </div>
  );
}