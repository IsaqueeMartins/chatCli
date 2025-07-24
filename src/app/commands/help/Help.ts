const helpMessage = `
Available commands:
- help: Show this help message
- start: Start a new chat session
- exit: Exit the application`;

export class Help {
  helpResponse() {
    console.log(helpMessage);
  }
}
