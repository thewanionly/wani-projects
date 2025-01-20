import { forwardRef } from 'react';
import { cn } from '../utils/styling.ts';

export interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, label, hint, ...props }, ref) => (
    <div className="flex flex-col items-start gap-1.5 text-sm font-normal text-neutral-500">
      {label && (
        <label className="text-neutral-700" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'flex w-full items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 motion-safe:transition-colors',
          className
        )}
        {...props}
      />
      {hint && <p className="">{hint}</p>}
    </div>
  )
);

Input.displayName = 'Input';

export { Input };
