import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant: "primary" | "outline";
  text: string;
  full?: boolean;
}

const Button = ({ variant, text, full, ...props }: ButtonProps) => {
  // Base Button Style
  const baseStyle = `${
    full ? "w-full" : "w-36"
  } px-2 py-3 text-xs md:text-sm font-medium uppercase transition duration-300 ease-in`;

  // Disabled Button Style
  const disableStyle = props.disabled && `cursor-not-allowed opacity-40`;

  return variant === "primary" ? (
    <button
      className={`${baseStyle} text-white bg-black border-2 border-black hover:bg-white hover:text-black ${disableStyle}`}
      {...props}
    >
      {text}
    </button>
  ) : (
    <button
      className={`${baseStyle} text-black border-2 border-black hover:bg-black hover:text-white ${disableStyle}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
