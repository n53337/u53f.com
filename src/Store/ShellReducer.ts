type actionType = {
  command: string | null;
};

export const ShellReducer = (state: string | null, action: actionType) => {
  switch (action.command) {
    case "help": {
      return "this is help command";
    }

    default:
      return state;
  }
};
