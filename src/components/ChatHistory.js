import React, { Component } from "react";
import Message from "./Message";
import { MessengerConsumer } from "./MessagesContext";

export default class ChatHistory extends Component {
  render() {
    return (
      <MessengerConsumer>
        {({ messages }) =>
          messages.map(message => {
            const { type, data } = message;
            return <Message key={message.id} data={message} />;
          })
        }
      </MessengerConsumer>
    );
  }
}
