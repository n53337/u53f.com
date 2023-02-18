import { ClipboardIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import React, { useReducer, useRef, useState } from "react";
import Text from "@/ui/Text";
import { ActionReturns, ShellReducer } from "@/Store/ShellReducer";

interface OutputOptions extends ActionReturns {}

const Shell = () => {
  // Shell Reducer
  const [state, dispatch] = useReducer(ShellReducer, { command: "clear" });

  // Input Ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Command Storage
  const [history, setHistory] = useState<OutputOptions[]>([
    { command: null, type: "commands", output: [""] },
    {
      command: "whoami",
      type: "commands",
      output: ["this is git showing ya!"],
    },
    {
      command: "test",
      type: "commands",
      output: ["this is test"],
    },
  ]);

  // handle Command Submition
  const handleShellCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reducer Req
    dispatch({ command: inputRef.current?.value.toLowerCase() });
    setHistory([...history, state]);
  };

  console.log(state);
  return (
    <div className="w-full flex flex-col max-w-2xl shadow-md">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <CommandLineIcon className="w-6 " />
        {/* <ClipboardIcon className="w-5 text-black stroke-white stroke-2 cursor-pointer" /> */}
      </div>

      <div className="max-h-96 flex flex-col gap-3 overflow-auto bg-white text-black p-4 border border-black">
        {/* Help Command */}

        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <Text variant="shell" className="opacity-50 font-normal">
            #enter help to see all available commands!
          </Text>
        </div>

        {/* Render History */}

        {history.map((hs, hi) => {
          return (
            <div key={hi}>
              {/* User Commands */}
              <div className="flex gap-2 items-center">
                <span className="text-xs md:text-sm font-medium text-black">
                  ~$
                </span>
                <Text variant="shell" className="font-normal">
                  {hs.command}
                </Text>
              </div>

              {/* Output */}
              <div className="flex flex-wrap gap-3 px-4">
                {history[hi].output?.map((hs) => {
                  return (
                    <Text key={hs} variant="shell" className="text-purple-900">
                      {hs}
                    </Text>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Render Output */}

        {
          <div>
            <div className="flex gap-2 items-center">
              <span className="text-xs md:text-sm font-medium text-black">
                ~$
              </span>
              <Text variant="shell" className="font-normal">
                {state.command}
              </Text>
            </div>
            <div>
              <Text variant="shell" className="text-purple-900">
                {state.output}
              </Text>
            </div>
          </div>
        }

        {/* New Prompt */}

        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <form className="w-full" onSubmit={handleShellCommand}>
            <input
              type="text"
              className="w-full outline-none text-xs md:text-sm font-normal text-slate-900"
              spellCheck={false}
              ref={inputRef}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shell;
