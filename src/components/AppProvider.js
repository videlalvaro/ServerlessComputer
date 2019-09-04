import React, { Component } from 'react';
import axios from 'axios';

const signalR = require('@aspnet/signalr');
const AppContext = React.createContext();

class AppProvider extends Component {

  state = {
    helpModal: false,
    isDisabled: false,
    username: '',
    messages: [],
    ready: false,
    checkedX: new Map(),
    checkedY: new Map(),
    lights: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    flags: new Map(),
    flagLabels: {
      1: 'zx',
      2: 'nx',
      3: 'zy',
      4: 'ny',
      5: 'op',
      6: 'no',
    },
  };

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.newMessage = this.newMessage.bind(this);
  }

  // TODO rename to handleChange, then calculate when the button is pressed
  onChange = (e) => {
    const item = e.target.name;
    const row = e.target.parentNode.id;
    const isChecked = e.target.checked;
    console.log(item, row);
    this.setState(prevState => ({ [row]: prevState[row].set(item, isChecked) }));
  };

  calculate = (e) => {
    const x = Array(16).fill(false);
    const y = Array(16).fill(false);
    const f = Array(6).fill(false);
    const { checkedX, checkedY, flags } = this.state;
    checkedX.forEach((v, k) => {
      var arrKey = parseInt(k, 10);
      x[arrKey] = v;
    });

    checkedY.forEach((v, k) => {
      var arrKey = parseInt(k, 10);
      y[arrKey] = v;
    });

    flags.forEach((v, k) => {
      var arrKey = parseInt(k, 10);
      f[arrKey] = v;
    })

    console.table(x);
    console.table(y);
    console.table(f);
    this.sendMessage(x, y, f);
  };

  sendMessage = (x, y, flags) => {
    // TODO data.output = "Running...";
    // TODO data.isDisabled = true;
    var xBin = this.toBin(x, 16);
    var yBin = this.toBin(y, 16);
    var flagsBin = this.toBin(flags, 6);

    console.log(`x: ${xBin}, y: ${yBin}, op: ${flagsBin}`);

    //see how to do callback
    axios.post(`/api/Handler`, {
      x: xBin.toString(2),
      y: yBin.toString(2),
      op: flagsBin.toString(2)
    })
    .then(function(response) {
      // TODO show running...
    })
  };

  newMessage(message) {
    // data.output = message.split("");
    // data.isDisabled = false;
    console.log("newMessage: ", message);
    console.log(("" + message).split(""));

    const res = ("" + message).split("").map(x => parseInt(x, 10))

    const that = this;
    that.setState({
      lights: res,
    });
  };

  toBin(arr, wordSize) {
    var res = 0;
    for (var i=0; i<arr.length; i++) {
      if (arr[i]) {
        res |= 1 << (wordSize - i - 1)
      }
    }
    return res.toString(2);
  };

  update = (update = {}) => {
    this.setState(update);
  };

  componentDidMount() {
    
    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`/api`)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connection.on('newMessage', this.newMessage);
    connection.onclose(() => console.log('disconnected'));

    console.log('connecting...');

    connection
      .start()
      .then(() => this.update({ ready: true }))
      .catch(console.error);
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
          onChange: this.onChange,
          calculate: this.calculate,
          checkedX: this.state.checkedX,
          checkedY: this.state.checkedY,
          flags: this.state.flags,
          lights: this.state.lights
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  };
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer };
