import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";
const chat = io("http://localhost:8008/chat");

chat.on("connect", function() {
  console.log(`chat connect`);
});
chat.on("news", function(data) {
  console.log(`news event`);
});
chat.on("disconnect", function() {
  console.log(`chat disconnect`);
});

export default class Message extends Component {
  sendMessage = () => {
    axios.post("/api/send/message", {}).then(res => {
      console.log(res.data);
    });
    // chat.emit("message", { content: "My message" });
  };

  render() {
    return (
      <div onClick={this.sendMessage}>
        <img src={this.props.data.src} alt="" />
      </div>
    );
  }
}
