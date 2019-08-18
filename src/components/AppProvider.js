import React, { Component } from 'react';
const signalR = require('@aspnet/signalr');
const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    helpModal: false,
    isDisabled: false,
    username: '',
    newMessage: '',
    messages: [],
    ready: false,
    checkedX: [],
    checkedY: [],
    output: '',
    flags: [],
    flagLabels: {
      1: 'zx',
      2: 'nx',
      3: 'zy',
      4: 'ny',
      5: 'op',
      6: 'no',
    },
  };

  calculate = () => {
    const { checkedX, checkedY, flags } = this.state;
    console.log(checkedX, checkedY, flags);
    sendMessage(checkedX, checkedY, flags);
  };

  update = (update = {}) => {
    this.setState(update);
  };

  componentDidMount() {
    const { newMessage } = this.state;
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`/api`)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection.on('newMessage', newMessage);
    connection.onclose(() => console.log('disconnected'));

    console.log('connecting...');

    connection
      .start()
      .then(() => this.update({ ready: true }))
      .catch(console.error);
  }

  showHelpModal = () => {
    this.setState({
      helpModal: true,
    });
  };

  closeHelpModal = () => {
    this.setState({
      helpModal: false,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          helpModal: this.state.helpModal,
          showHelpModal: this.showHelpModal,
          closeHelpModal: this.closeHelpModal,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer };
