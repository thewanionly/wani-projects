import { ReactNode } from 'react';

import '../styles/global.css';

export interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className='text-sm leading-5 text-neutral-600 border border-neutral-200 rounded-full py-0.5 px-2'>
      {children}
    </span>
  );
};
