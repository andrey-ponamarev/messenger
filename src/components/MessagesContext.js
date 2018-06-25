import React, { Component } from "react";
import { getTread } from "../services";

const Context = React.createContext();

export default class MessengerProvider extends Component {
  state = {
    activeThread: 1,
    history: {}
  };

  componentDidMount() {
    getTread().then(messages => {
      this.setState({
        history: {
          1: messages
        }
      });
    });
    this.setState();
  }

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
