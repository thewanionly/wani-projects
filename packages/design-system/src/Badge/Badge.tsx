import { ReactNode } from 'react';

import '../styles/global.css';

enum BadgeSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

enum BadgeVariant {
  Neutral = 'neutral',
  Error = 'error',
  Warning = 'warning',
  Successs = 'success',
  Brand = 'brand'
}

export interface BadgeProps {
  size?: BadgeSize;
  variant?: BadgeVariant;
  children: ReactNode;
}

export const Badge = ({
  size = BadgeSize.Medium,
  variant = BadgeVariant.Neutral,
  children
}: BadgeProps) => {
  return (
    <span className='text-sm leading-5 text-neutral-600 border border-neutral-200 rounded-full py-0.5 px-2'>
      {children}
    </span>
  );
};
