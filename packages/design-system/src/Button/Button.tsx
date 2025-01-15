import { cn } from '../utils/styling.ts';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  LinkColor = 'linkColor',
  LinkGray = 'linkGray',
  Destructive = 'destructive',
}

export enum ButtonSize {
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra_large',
  ExtraLarge2 = 'extra_large_2',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const BUTTON_VARIANT_MAP = {
  [ButtonVariant.Primary]: `
    bg-indigo-700 text-white shadow font-medium
    hover:bg-indigo-800
    focus:bg-indigo-800 focus:shadow-buttonFocusRing focus-visible:outline-none
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none
  `,
  [ButtonVariant.Secondary]: `
    bg-white outline outline-[0.5px] outline-neutral-200 text-neutral-900 shadow font-medium
    hover:bg-neutral-50 hover:text-neutral-950 hover:outline-1
    focus:bg-neutral-50 focus:text-neutral-950 focus:outline-1 focus:shadow-buttonFocusRing
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none disabled:outline-none
  `,
  [ButtonVariant.Tertiary]: ``,
  [ButtonVariant.LinkColor]: ``,
  [ButtonVariant.LinkGray]: ``,
  [ButtonVariant.Destructive]: `
    bg-red-600 text-white shadow font-medium
    hover:bg-red-700
    focus:bg-red-700 focus:shadow-destructiveBtnFocusRing focus-visible:outline-none
    disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none
  `,
};

const BUTTON_SIZE_MAP = {
  [ButtonSize.Medium]: 'text-sm px-3.5 py-2.5',
  [ButtonSize.Large]: 'text-base px-4 py-2.5',
  [ButtonSize.ExtraLarge]: 'text-base px-5 py-3',
  [ButtonSize.ExtraLarge2]: 'text-lg px-6 py-4',
};

export const Button = ({
  className,
  label,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'rounded motion-safe:transition-colors',
        BUTTON_VARIANT_MAP[variant],
        BUTTON_SIZE_MAP[size],
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
