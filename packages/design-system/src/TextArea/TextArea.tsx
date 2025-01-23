import { forwardRef } from 'react';
import { cn } from '../utils/styling.ts';

export interface TextAreaProps extends React.ComponentProps<'textarea'> {
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, id, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-neutral-700" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'h-[108px] resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-3',
          'font-norma text-sm text-neutral-900',
          'placeholder:text-neutral-500',
          'focus:border-indigo-700 focus:shadow-buttonFocusRing focus:outline-none'
        )}
        id={id}
        {...props}
        ref={ref}
      />
    </div>
  );
});

TextArea.displayName = 'TextArea';

export { TextArea };
