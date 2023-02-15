import { ClipboardIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import Text from "@/ui/Text";
import { useReducer } from "react";
import { ShellReducer } from "@/Store/ShellReducer";

const Shell = () => {
  const [state, dispatch] = useReducer(ShellReducer, null);

  const handleShellCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ command: "help" });
    console.log(state);
  };

  return (
    <div className="w-full flex flex-col max-w-2xl shadow-md">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <CommandLineIcon className="w-6 " />
        {/* <ClipboardIcon className="w-5 text-black stroke-white stroke-2 cursor-pointer" /> */}
      </div>

      {/* Default Command */}
      <div className="max-h-96 overflow-auto bg-white text-black p-4 border border-black">
        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <Text variant="shell" className="text-gray-500">
            #enter help to see all available commands!
          </Text>
        </div>

        {/* User Commands */}
        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <form className="w-full" onSubmit={handleShellCommand}>
            <input
              type="text"
              className="w-full outline-none text-xs md:text-sm font-normal text-slate-900"
              spellCheck={false}
            />
          </form>
          {/* <Text variant="shell">Lorem ipsum dolor sit</Text> */}
        </div>
      </div>
    </div>
  );
};

export default Shell;
