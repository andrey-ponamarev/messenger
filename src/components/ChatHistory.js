import React, { Component } from "react";
import Message from "./Message";
import { MessengerConsumer } from "./MessagesContext";

export default class ChatHistory extends Component {
  render() {
    return (
      <MessengerConsumer>
        {({ messages }) =>
          messages.order.map(id => {
            const { type, data } = messages.data[id];
            return <Message key={id} type={type} data={data} />;
          })
        }
      </MessengerConsumer>
    );
  }
}
