import { forwardRef } from 'react';
import { cn } from '../utils/styling.ts';

export interface TextAreaProps extends React.ComponentProps<'textarea'> {
  label?: string;
  errorMessage?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, id, disabled, errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-neutral-700" htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'h-[108px] resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-3 motion-safe:transition-colors',
            'text-sm font-normal text-neutral-900',
            'placeholder:text-neutral-500',
            'focus:border-indigo-700 focus:shadow-buttonFocusRing focus:outline-none',
            'disabled:border-neutral-100 disabled:text-neutral-500 disabled:placeholder:text-neutral-400',
            errorMessage &&
              'border-red-300 focus:border-red-600 focus:shadow-destructiveBtnFocusRing'
          )}
          id={id}
          disabled={disabled}
          {...props}
          ref={ref}
        />
        <div>
          {errorMessage && <p className="text-sm font-normal text-red-600">{errorMessage}</p>}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
