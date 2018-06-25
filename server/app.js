const app = require("express")();
const http = require("http").Server(app);
// const socket = require("./socket");
const io = require("socket.io")(http);
const chat = io.of("/chat");

const _ = require("lodash");
const db = require("./db.js").default;
// Socket
// chat.on("connection", socket => {
//   socket.emit("news", { hello: "world" });
//   socket.on("message", data => {
//     console.log(data);
//   });
// });

const config = {
  port: 8008
};

app.get("/api/thread", (req, res) => {
  const getFakeHistory = _.times(10, db);

  res.json({ messages: getFakeHistory });
});

app.post("/api/send/message", (req, res) => {
  // chat.emit("event", { for: "everyone" });
});

// app.post("/api/send/message", (req, res) => {
//   res.send("done");
//   chat.emit("event", { for: "everyone" });
// });

http.listen(config.port, () => {
  console.log(`server listening on :${config.port}`);
});

// socket.init(http);
