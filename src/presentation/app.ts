import inquirer from "inquirer";
import { commands } from "~/app/commands/index";

console.log(` ▄█          ▄████████    ▄████████    ▄████████
███         ███    ███   ███    ███   ███    ███
███▌        ███    █▀    ███    █▀    ███    █▀ 
███▌        ███         ▄███▄▄▄      ▄███▄▄▄    
███▌      ▀███████████ ▀▀███▀▀▀     ▀▀███▀▀▀    
███                ███   ███    █▄    ███    █▄ 
███          ▄█    ███   ███    ███   ███    ███
█▀         ▄████████▀    ██████████   ██████████
                                                
▄██   ▄    ▄██████▄  ███    █▄                  
███   ██▄ ███    ███ ███    ███                 
███▄▄▄███ ███    ███ ███    ███                 
▀▀▀▀▀▀███ ███    ███ ███    ███                 
▄██   ███ ███    ███ ███    ███                 
███   ███ ███    ███ ███    ███                 
███   ███ ███    ███ ███    ███                 
 ▀█████▀   ▀██████▀  ████████▀  
 
Welcome to the ChatCLI!
This is a command-line interface for interacting with a chat application.
Dont use your real name here.
This is a anonymous chat application.
Type 'help' to see available commands.                         
`);
async function start() {
  const { cmd } = await inquirer.prompt([
    {
      type: "input",
      name: "cmd",
      message: "What you say? ",
    },
  ]);
  const command = commands[cmd];
  if (command?.run) {
    command.run(args);
  }
}
start();
