import { ComponentProps } from "react";
interface InputType extends ComponentProps<"input"> {
  labelText?: string;
  errorMsg?: string;
}

const Input = ({ labelText, errorMsg, ...props }: InputType) => {
  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-xs md:text-sm text-gray-600 uppercase font-normal">
          {labelText}
        </label>
      )}
      <input
        className={`w-full p-3 text-xs md:text-sm font-normal text-black bg-gray-200 outline-gray-300 ${
          errorMsg && "border border-red-500"
        }`}
        spellCheck={false}
        {...props}
      />
      <span className="text-xs md:text-sm text-red-500 font-normal -mt-1 italic">
        {errorMsg}
      </span>
    </div>
  );
};

export default Input;
