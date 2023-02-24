import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { FormEvent, useRef, useState } from "react";

interface Letter {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  // Form submition

  const [letter, setLetter] = useState<Letter>({
    name: "",
    email: "",
    message: "",
  });

  const [inputError, setInputError] = useState<string[]>(["", "", ""]);

  const submitForm = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(inputError);

    const currErrorState = [];

    // Form Validation
    if (!letter.name?.length) {
      currErrorState[0] = "This field is required";
    }

    if (
      !letter.email?.length &&
      !/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(letter.email)
    ) {
      currErrorState[1] = "This Email is not valid";
    }

    if (!letter.message?.length) {
      currErrorState[2] = "This field is required";
    }

    setInputError(currErrorState);
  };

  return (
    <form className="lg:col-span-3 flex flex-col gap-8" onSubmit={submitForm}>
      <Input
        type="text"
        labelText="Name"
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setLetter({ ...letter, name: e.currentTarget.value })
        }
        errorMsg={inputError[0]}
      />
      <Input
        type="email"
        labelText="Email Adress"
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setLetter({ ...letter, email: e.currentTarget.value })
        }
        errorMsg={inputError[1]}
      />
      <div className="flex flex-col gap-3">
        <label className="text-xs md:text-sm text-gray-600 uppercase font-normal">
          Message
        </label>
        <textarea
          className={`bg-gray-200 text-black p-3 text-xs md:text-sm outline-gray-300 ${
            inputError[2] && "border border-red-500"
          }`}
          cols={30}
          rows={5}
          onChange={(e: FormEvent<HTMLTextAreaElement>) =>
            setLetter({ ...letter, message: e.currentTarget.value })
          }
        ></textarea>
        <span
          className={`text-xs md:text-sm text-red-500 font-normal -mt-1 italic `}
        >
          {inputError[2] && inputError[2]}
        </span>
      </div>
      <Button variant="primary" text="Send" />
    </form>
  );
};

export default Form;
