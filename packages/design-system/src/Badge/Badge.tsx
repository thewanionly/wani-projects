import { ReactNode } from 'react';

import '../styles/global.css';
import { cn } from '../utils/styling.ts';

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

const BADGE_SIZE_MAP = {
  [BadgeSize.Small]: 'text-xs leading-4 py-0.5 px-1.5',
  [BadgeSize.Medium]: 'text-sm leading-5 py-0.5 px-2',
  [BadgeSize.Large]: 'text-sm leading-5 py-1 px-2.5'
};

export const Badge = ({
  size = BadgeSize.Medium,
  variant = BadgeVariant.Neutral,
  children
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'rounded-full border border-neutral-200 text-neutral-600',
        BADGE_SIZE_MAP[size]
      )}
    >
      {children}
    </span>
  );
};
