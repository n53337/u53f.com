import { ReactHTMLElement } from "react";

interface InputType extends ReactHTMLElement<HTMLInputElement> {}

const Input = ({ ...props }: InputType) => {
  return <input {...props} />;
};

export default Input;
