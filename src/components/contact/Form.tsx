import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Letter Interface
interface Letter {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const formRef = useRef<HTMLFormElement | any>();
  const [letter, setLetter] = useState<Letter>({
    name: "",
    email: "",
    message: "",
  });
  const [inputError, setInputError] = useState<string[]>(["", "", ""]);
  const [emailStatus, setEmailStatus] = useState<string>("send");

  // !Form Validation

  const formValidation = () => {
    const currErrorState = ["", "", ""];

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

    const isValidForm = currErrorState.every((er) => !er);

    if (isValidForm) sendEmail();
  };

  // !Send Email

  const sendEmail = async () => {
    try {
      setEmailStatus("sending...");
      const req = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      const res = req.text;
      req.text === "OK" && setEmailStatus("Sent :)");
    } catch (error) {
      setEmailStatus("Field to send :(");
    }
  };

  const submitForm = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    formValidation();
  };

  return (
    <form
      className="lg:col-span-3 flex flex-col gap-8"
      onSubmit={submitForm}
      ref={formRef}
    >
      <Input
        type="text"
        name="user_name"
        labelText="Name"
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setLetter({ ...letter, name: e.currentTarget.value })
        }
        errorMsg={inputError[0]}
      />
      <Input
        type="email"
        name="user_email"
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
          name="message"
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
      <Button variant="primary" text={emailStatus} />
    </form>
  );
};

export default Form;
