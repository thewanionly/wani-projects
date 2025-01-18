import { forwardRef } from 'react';
import { cn } from '../utils/styling.ts';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      'flex items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 motion-safe:transition-colors',
      'text-sm font-normal text-neutral-500',
      className
    )}
    {...props}
  />
));

Input.displayName = 'Input';

export { Input };
