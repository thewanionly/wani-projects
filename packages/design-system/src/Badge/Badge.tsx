import { ReactNode } from 'react';

import '../styles/global.css';
import { cn } from '../utils/styling.ts';

export enum BadgeSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum BadgeVariant {
  Neutral = 'neutral',
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
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

const BADGE_VARIANT_MAP = {
  [BadgeVariant.Neutral]: 'text-neutral-600 bg-gray-50 border-neutral-200',
  [BadgeVariant.Error]: 'text-red-600 bg-red-50 border-red-200',
  [BadgeVariant.Warning]: 'text-amber-700 bg-amber-50 border-amber-200',
  [BadgeVariant.Success]: 'text-green-700 bg-green-50 border-green-200',
  [BadgeVariant.Brand]: 'text-indigo-700 bg-indigo-50 border-indigo-200'
};

export const Badge = ({
  size = BadgeSize.Medium,
  variant = BadgeVariant.Neutral,
  children
}: BadgeProps) => {
  return (
    <span className={cn('rounded-full border', BADGE_SIZE_MAP[size], BADGE_VARIANT_MAP[variant])}>
      {children}
    </span>
  );
};
