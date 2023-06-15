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
          "I possess a high level of proficiency in various web technologies, with a particular focus on React, Typescript, Tailwind CSS, SCSS, and a plethora of others.",
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
          "I utilize Arch BTW as my operating system of choice. While coding, I find great satisfaction in leveraging the power of Neovim. However, for web development projects, I rely on the Vim Extension within the VS Code environment. ",
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
          `Apologies, but the command you entered could not be found. Please enter "help" to display a comprehensive list of available commands.`,
        ],
      };
      return returnedData;
  }
};
