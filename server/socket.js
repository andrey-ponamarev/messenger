const chat = io.of("/chat");

// Socket
chat.on("connection", socket => {
  socket.emit("news", { hello: "world" });
  socket.on("message", data => {
    console.log(data);
  });
});
