import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "transition border-2 border-transparent rounded px-4 py-2",
  {
    variants: {
      variant: {
        solid: "bg-opacity-100",
        outlined: "bg-opacity-0",
        ghost: "bg-opacity-0 hover:bg-opacity-100 border-0",
      },
      intent: {
        primary: "bg-blue-500 border-blue-500",
        secondary: "bg-purple-500 border-purple-500",
        warning: "bg-yellow-500 border-yellow-500",
        danger: "bg-red-500 border-red-500",
        info: "bg-green-500 border-green-500",
      },
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  title?: string;
  variant?: "solid" | "outlined" | "ghost";
  size?: "sm" | "base" | "md" | "lg";
  intent?: "primary" | "secondary" | "warning" | "danger" | "info";
  onClick?: () => void;
}

export default function Button({
  title,
  variant = "solid",
  size = "base",
  intent = "primary",
}: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, intent })}> {title}</button>
  );
}
