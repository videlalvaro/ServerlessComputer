import React, { Component } from 'react';
const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    helpModal: false,
  };

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
