import { ComponentProps } from "react";

interface TextProps extends ComponentProps<"p"> {
  variant: "header" | "title" | "text" | "para" | "link" | "shell";
  size?: number;
  textColor?: string;
}

const Text = ({ variant, size, children, textColor, ...props }: TextProps) => {
  return variant === "header" ? (
    <h1
      {...props}
      className={`text-3xl md:text-5xl font-bold text-black md:leading-header ${props.className}`}
      id={props.id}
    >
      {children}
    </h1>
  ) : variant === "title" ? (
    <h2
      {...props}
      className={`text-xl md:text-3xl font-medium text-black ${props.className}`}
      id={props.id}
    >
      {children}
    </h2>
  ) : variant === "text" ? (
    <p
      {...props}
      className={`text-sm md:text-base font-normal text-black opacity-75 ${props.className}`}
      id={props.id}
    >
      {children}
    </p>
  ) : variant === "para" ? (
    <p
      {...props}
      className={`text-sm md:text-base font-normal text-black ${props.className}`}
      id={props.id}
    >
      {children}
    </p>
  ) : variant === "link" ? (
    <p
      {...props}
      className={`text-xs md:text-sm font-medium uppercase tracking-widest text-black cursor-pointer hover:text-gray-400 ${props.className}`}
      id={props.id}
    >
      {children}
    </p>
  ) : variant === "shell" ? (
    <p
      {...props}
      className={`text-xs md:text-sm font-medium text-slate-900 ${props.className}`}
      id={props.id}
    >
      {children}
    </p>
  ) : null;
};

export default Text;
