import Button from "@/ui/Button";
import Input from "@/ui/Input";

const Form = () => {
  return (
    <form className="lg:col-span-3 flex flex-col gap-8">
      <Input type="text" labelText="Name" />
      <Input type="email" labelText="Email Adress" />
      <div className="flex flex-col gap-3">
        <label className="text-xs md:text-sm text-gray-600 uppercase font-normal">
          Message
        </label>
        <textarea
          className="bg-gray-200 text-black p-3 text-xs md:text-sm outline-gray-300"
          cols={30}
          rows={5}
        ></textarea>
      </div>
      <Button variant="primary" text="Send" />
    </form>
  );
};

export default Form;
