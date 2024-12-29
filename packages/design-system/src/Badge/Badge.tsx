import { ReactNode } from 'react';

import '../styles/global.css';

enum BadgeSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface BadgeProps {
  size?: BadgeSize;
  children: ReactNode;
}

export const Badge = ({ size = BadgeSize.Medium, children }: BadgeProps) => {
  return (
    <span className='text-sm leading-5 text-neutral-600 border border-neutral-200 rounded-full py-0.5 px-2'>
      {children}
    </span>
  );
};
