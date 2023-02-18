interface ActionType {
  command: string | null | undefined;
}

export interface ActionReturns {
  command?: string | null | undefined;
  type?: "text" | "commands" | "error";
  output?: string[];
}

export const ShellReducer = (
  state: ActionReturns | "clear",
  action: ActionType
) => {
  switch (action.command) {
    // > Help
    case "help": {
      const returnedData: ActionReturns = {
        command: "help",
        type: "commands",
        output: ["whoami", "setup", "skills", "clear"],
      };
      return returnedData;
    }

    // > Whoami
    case "whoami": {
      const returnedData: ActionReturns = {
        command: "whoami",
        type: "text",
        output: [
          "I am youssef, 21 years of existence. I love missing with computers 💻",
        ],
      };
      return returnedData;
    }

    // > Skills
    case "skills": {
      const returnedData: ActionReturns = {
        command: "skills",
        type: "text",
        output: [
          "I am very comfortable with web technologies, especially with React, Typescript, Tailwind CSS, SCSS, and many more. But the thing is that I am learning things quickly.",
        ],
      };
      return returnedData;
    }

    // > Setup
    case "setup": {
      const returnedData: ActionReturns = {
        command: "setup",
        type: "text",
        output: [
          "I am using Arch BTW. I love coding with Neovim, but for web projects, I use VS Code with the Vim Extension! ",
        ],
      };
      return returnedData;
    }

    // > Clear
    case "clear": {
      return { command: "clear" };
    }

    // > Error
    default:
      const returnedData: ActionReturns = {
        command: action.command,
        type: "error",
        output: [
          `Sorry, this command was not found. Enter "help" to show all possible commands!`,
        ],
      };
      return returnedData;
  }
};
