import { ComponentProps } from "react";

interface TextProps extends ComponentProps<"p"> {
  variant: "header" | "title" | "text" | "link";
  size?: number;
}

const Text = ({ variant, size, children, ...props }: TextProps) => {
  return variant === "header" ? (
    <h1 className="text-3xl md:text-5xl font-bold text-black">{children}</h1>
  ) : variant === "title" ? (
    <h2 className="text-xl md:text-3xl font-medium text-black">{children}</h2>
  ) : variant === "text" ? (
    <p className="text-sm md:text-base font-normal text-black opacity-70">
      {children}
    </p>
  ) : variant === "link" ? (
    <p className="text-sm md:text-base font-m uppercase text-black cursor-pointer hover:text-gray-400">
      {children}
    </p>
  ) : null;
};

export default Text;
