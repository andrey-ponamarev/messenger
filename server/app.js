const app = require("express")();
const http = require("http").Server(app);
const socket = require("./socket");

const config = {
  port: 8008
};

app.post("/api/send/message", (req, res) => {
  res.send("done");
  chat.emit("event", { for: "everyone" });
});

app.post("/api/send/message", (req, res) => {
  res.send("done");
  chat.emit("event", { for: "everyone" });
});

http.listen(config.port, () => {
  console.log(`server listening on :${config.port}`);
});

socket.init(http);
