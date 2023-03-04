import { ClipboardIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Text from "@/ui/Text";
import { ActionReturns, ShellReducer } from "@/Store/ShellReducer";

interface OutputOptions extends ActionReturns {}

const Shell = () => {
  // Shell Reducer
  const [state, dispatch] = useReducer(ShellReducer, {});

  // Input Ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Input Controller
  const [inputCtr, setInputCtr] = useState<string>("");

  // Command Storage
  const [history, setHistory] = useState<OutputOptions[]>([]);

  // handle Command Submition
  const handleShellCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // clear input
    setInputCtr("");
    // Reducer Req
    dispatch({ command: inputCtr.toLowerCase() });
    setHistory([...history, state]);
    if (state.command === "clear") setHistory([]);
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full flex flex-col max-w-2xl shadow-md">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <CommandLineIcon className="w-6" />
      </div>

      <div className="max-h-48 md:max-h-56 flex flex-col gap-3 overflow-auto bg-white text-black p-4 border border-black">
        {/* Help Command */}

        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <Text variant="shell" className="opacity-50 font-normal">
            #enter help to see all available commands!
          </Text>
        </div>

        {/* Render History */}

        {history.length
          ? state.command != "clear" &&
            history.map((hs, hi) => {
              return hs.command ? (
                <div key={hi} className="flex flex-col gap-3">
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
                    {history[hi].output?.map((hsc) => {
                      return (
                        <Text key={hsc} variant="shell">
                          {hsc}
                        </Text>
                      );
                    })}
                  </div>
                </div>
              ) : null;
            })
          : null}

        {/* Render Current Output */}

        <div className="flex flex-col gap-3">
          {/* Input */}
          {state.command && state.command != "clear" && (
            <div className="flex gap-2 items-center">
              <span className="text-xs md:text-sm font-medium text-black">
                ~$
              </span>
              <Text variant="shell" className="font-normal">
                {state.command}
              </Text>
            </div>
          )}

          {/* Output */}

          <div className="flex flex-wrap gap-3 px-4">
            {state.output?.map((hsc) => {
              return (
                <Text key={hsc} variant="shell">
                  {hsc}
                </Text>
              );
            })}
          </div>
        </div>

        {/* New Prompt */}

        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-black">~$</span>
          <form className="w-full" onSubmit={handleShellCommand}>
            <input
              type="text"
              className="w-full outline-none text-xs md:text-sm font-normal text-slate-900"
              spellCheck={false}
              ref={inputRef}
              value={inputCtr}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setInputCtr(e.currentTarget.value)
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shell;
