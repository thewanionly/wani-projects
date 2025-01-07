import { cn } from '../utils/styling.ts';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
}

export const Button = ({ className, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn('rounded bg-indigo-700 px-3.5 py-2.5 text-sm text-white', className)}
      {...props}
    >
      {label}
    </button>
  );
};
