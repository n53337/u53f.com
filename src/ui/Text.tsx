import { ComponentProps } from "react";

interface TextProps extends ComponentProps<"p"> {
  variant: "header" | "title" | "text" | "link";
  size?: number;
}

const Text = ({ variant, size, children, ...props }: TextProps) => {
  return variant === "header" ? (
    <h1
      {...props}
      className={`text-3xl md:text-5xl font-bold text-black  ${props.className}`}
    >
      {children}
    </h1>
  ) : variant === "title" ? (
    <h2
      {...props}
      className={`text-xl md:text-3xl font-medium text-black ${props.className}`}
    >
      {children}
    </h2>
  ) : variant === "text" ? (
    <p
      {...props}
      className={`text-sm md:text-base font-normal text-black opacity-70 ${props.className}`}
    >
      {children}
    </p>
  ) : variant === "link" ? (
    <p
      {...props}
      className={`text-xs md:text-sm font-medium uppercase tracking-widest text-black cursor-pointer hover:text-gray-400 ${props.className}`}
    >
      {children}
    </p>
  ) : null;
};

export default Text;
