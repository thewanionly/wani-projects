export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
