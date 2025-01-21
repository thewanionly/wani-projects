import { forwardRef } from 'react';
import { cn } from '../utils/styling.ts';
import { CircleHelp } from 'lucide-react';
export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, label, hint, disabled, ...props }, ref) => (
    <div
      className={cn(
        'flex flex-col items-start gap-1.5 text-sm font-normal text-neutral-500',
        className
      )}
    >
      {label && (
        <label className="text-neutral-700" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={cn(
          'flex w-full justify-between gap-2 rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 motion-safe:transition-colors',
          'focus-within:border-indigo-700 focus-within:shadow-buttonFocusRing',
          disabled && 'border-neutral-100'
        )}
      >
        <input
          ref={ref}
          id={id}
          className={cn(
            'flex-1 bg-neutral-50 text-neutral-900 placeholder:text-neutral-500 focus:outline-none',
            disabled && 'text-neutral-500 placeholder:text-neutral-400'
          )}
          disabled={disabled}
          {...props}
        />
        <CircleHelp />
      </div>
      {hint && <p>{hint}</p>}
    </div>
  )
);

Input.displayName = 'Input';

export { Input };
