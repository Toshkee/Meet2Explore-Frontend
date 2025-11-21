import { useState, useEffect } from "react";
import useSocket from "../hooks/useSocket";

const Chat = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Listen for messages
  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, [socket]);

  function sendMessage() {
    if (!input.trim()) return;

    socket.emit("chatMessage", input);
    setInput("");
  }

  return (
    <div>
      <h2>Chat</h2>

      <div>
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>

      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;