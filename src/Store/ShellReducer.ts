interface ActionType {
  command: string | null;
}

interface ActionReturns {
  type: "text" | "commands" | "error";
  body: string | string[];
  title?: string;
}

export const ShellReducer = (
  state: ActionReturns | "clear",
  action: ActionType
) => {
  switch (action.command) {
    // > Help
    case "help": {
      const returnedData: ActionReturns = {
        type: "commands",
        body: ["whoami", "tools", "setup", "skills"],
        title:
          "type one of those commands in the terminal and see what happens!",
      };
      return returnedData;
    }

    // > Whoami
    case "whoami": {
      const returnedData: ActionReturns = {
        type: "text",
        body: "I am youssef, 21 years of existence. I love missing with computers 💻",
      };
      return returnedData;
    }

    // > Skills
    case "skills": {
      const returnedData: ActionReturns = {
        type: "text",
        body: "I am very comfortable with web technologies, especially with React, Typescript, Tailwind CSS, SCSS, and many more. But the thing is that I am learning things quickly.",
      };
      return returnedData;
    }

    // > Setup
    case "setup": {
      const returnedData: ActionReturns = {
        type: "text",
        body: "I am using Arch BTW. I love coding with Neovim, but for web projects, I use VS Code with the Vim Extension! ",
      };
    }

    // > Clear
    case "clear": {
      return "clear";
    }

    // > Error
    default:
      const returnedData: ActionReturns = {
        type: "error",
        body: `Sorry, this command was not found. Enter "help" to show all possible commands!`,
      };
      return returnedData;
  }
};
