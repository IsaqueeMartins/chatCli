import { Help } from "../app/commands/help/Help";

const readLine = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readLine.createInterface({ input, output });

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

rl.question("What you say? ", (answer: string) => {
  if (answer === "help") {
    const help = new Help();
    help.helpResponse();
  }
});
