import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return <span>{children}</span>;
};
