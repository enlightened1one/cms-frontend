import { ButtonHTMLAttributes, FC } from "react";
import { type VariantProps, cva } from "class-variance-authority"; //for conditional tailwind classes



const ButtonVariants = cva(
  "cms-bg-primary-dark-1 text-white cms-text-sm  w-full py-2 cursor-pointer active:scale-90 rounded-lg",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        outline:
          "bg-transparent border border-primary-dark-1 text-primary-dark-1 hover:bg-primary-dark-1 hover:text-white",
        faint:
          "bg-transparent text-primary-dark-1 hover:bg-primary-dark-1 hover:text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        small: "h-8 px-2 rounded-md",
      },
    },
  },
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = ({className, size, variant, ...props}) => {
  return <button {...props} />;
};

export {Button, ButtonVariants} ;
