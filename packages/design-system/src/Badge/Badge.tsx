import { ReactNode } from 'react';

import '../styles/global.css';

export interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return <span className='text-red-700'>{children}</span>;
};
