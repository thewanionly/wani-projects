import React from 'react';

interface BadgeProps {
  value: string;
}

export const Badge = ({ value }: BadgeProps) => {
  return <span>{value}</span>;
};
