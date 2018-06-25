import React, { Component } from "react";

const Context = React.createContext();

export default class MessengerProvider extends Component {
  state = {
    activeThread: 1,
    history: {
      1: {
        order: [1, 2, 3, 4],
        data: {
          1: {
            type: "media",
            data: {
              content: "Hello"
            }
          },
          2: {
            type: "media",
            data: {
              content: "Hello"
            }
          },
          3: {
            type: "media",
            data: {
              content: "Hello"
            }
          },
          4: {
            type: "media",
            data: {
              content: "Hello"
            }
          }
        },
        unreadCount: 0,
        draft: ""
      }
    }
  };

  render() {
    const { history, activeThread } = this.state;

    console.log(history[activeThread]);
    return (
      <Context.Provider
        value={{
          messages: history[activeThread]
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const MessengerConsumer = Context.Consumer;
