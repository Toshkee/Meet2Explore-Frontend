import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://meet2exploree-b38798365d15.herokuapp.com";

const socket = io(SOCKET_URL, {
  autoConnect: true,
  transports: ["websocket"],
});

export default socket;