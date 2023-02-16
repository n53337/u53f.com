import { ClipboardIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import Text from "@/ui/Text";
import React, { useReducer, useState } from "react";
import { ShellReducer } from "@/Store/ShellReducer";

const Shell = () => {
  // Shell Reducer Init
  const [state, dispatch] = useReducer(ShellReducer, "clear");

  // Input State
  const [prompt, setPrompt] = useState<string>("");

  // outputs Storage
  const [outputs, setOutputs] = useState<string[]>([""]);

  const handleShellCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ command: prompt.toLowerCase() });
  };

  console.log(state);

  return (
    <div className="w-full flex flex-col max-w-2xl shadow-md">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <CommandLineIcon className="w-6 " />
        {/* <ClipboardIcon className="w-5 text-black stroke-white stroke-2 cursor-pointer" /> */}
      </div>

      <div className="max-h-96 overflow-auto bg-white text-black p-4 border border-black">
        {/* Help Command */}
        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <Text variant="shell" className="text-gray-400">
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
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPrompt(e.currentTarget.value)
              }
            />
          </form>
          {/* <Text variant="shell">Lorem ipsum dolor sit</Text> */}
        </div>

        {/* Output */}
        <div className="flex flex-wrap gap-3 px-4">
          <Text variant="shell">help</Text>
          <Text variant="shell">help</Text>
          <Text variant="shell">help</Text>
          <Text variant="shell">help</Text>
        </div>
      </div>
    </div>
  );
};

export default Shell;
