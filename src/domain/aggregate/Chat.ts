interface Chat {
  id: number;
  senderId: number;
  receiverId: number;
  messages: Message[];
}