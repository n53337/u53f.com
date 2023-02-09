import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant: "primary" | "outline";
  text: string;
  full?: boolean;
}

const Button = ({ variant, text, full, ...props }: Props) => {
  const baseStyle = `${
    full ? "w-full" : "w-36"
  } px-2 py-3 text-sm uppercase transition duration-300 ease-in`;

  return variant === "primary" ? (
    <button
      className={`${baseStyle} text-white bg-black border-2 border-black hover:bg-white hover:text-black`}
      {...props}
    >
      {text}
    </button>
  ) : (
    <button
      className={`${baseStyle} text-black border-2 border-black hover:bg-black hover:text-white`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
