import { ComponentProps } from "react";

interface TextProps extends ComponentProps<"p"> {
  variant: "header" | "title" | "text" | "link";
  size?: number;
}

const Text = ({ variant, size, children, ...props }: TextProps) => {
  return variant === "header" ? (
    <h1 className="text-3xl md:text-5xl font-bold">{children}</h1>
  ) : variant === "title" ? (
    <h2 className="text-xl md:text-3xl font-medium">{children}</h2>
  ) : variant === "text" ? (
    <p className="text-sm md:text-base font-normal text-black opacity-70">
      {children}
    </p>
  ) : variant === "link" ? (
    <p className="text-sm md:text-lg font-medium uppercase">link</p>
  ) : null;
};

export default Text;
