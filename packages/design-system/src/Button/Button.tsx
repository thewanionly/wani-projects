import { cn } from '../utils/styling.ts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
}

export const Button = ({ className, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'rounded bg-indigo-700 px-3.5 py-2.5 text-sm font-medium text-white shadow',
        'hover:bg-indigo-800 focus:bg-indigo-800 focus:shadow-buttonFocusRing focus-visible:outline-none motion-safe:transition-colors',
        'disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none',
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
