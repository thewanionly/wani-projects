import { forwardRef } from 'react';
import { cn } from '../utils/styling.ts';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, label, ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      <label className="self-start text-sm font-medium text-neutral-700" htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={cn(
          'flex items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 motion-safe:transition-colors',
          'text-sm font-normal text-neutral-500',
          className
        )}
        {...props}
      />
    </div>
  )
);

Input.displayName = 'Input';

export { Input };
