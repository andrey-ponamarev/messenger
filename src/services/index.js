import axios from "axios";
import io from "socket.io-client";
const socket = io("http://localhost:63240");

export const getTread = () => {
  return axios.get("/api/thread");
};
export const sendMessage = data => {
  return axios.post("/api/send/message", data).then(res => {});
};

socket.on("connect", function() {
  console.log(`woow connect`);
});
socket.on("event", function(data) {
  console.log(`woow event`);
});
socket.on("disconnect", function() {
  console.log(`woow disconnect`);
});
