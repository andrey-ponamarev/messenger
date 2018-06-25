import React, { Component } from "react";
import MessagesProvider from "./MessagesContext";
import ChatHistory from "./ChatHistory";

export default class Messenger extends Component {
  render() {
    return (
      <MessagesProvider>
        <ChatHistory />
      </MessagesProvider>
    );
  }
}
