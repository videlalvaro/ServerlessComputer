const axios = require('axios');

function sendMessage(x, y, flags) {
  data.output = 'Running...';
  data.isDisabled = true;
  var xBin = toBin(x, 16);
  var yBin = toBin(y, 16);
  var flagsBin = toBin(flags, 6);
  console.log(`x: ${xBin}, y: ${yBin}, op: ${flagsBin}`);
  return axios
    .post(`/api/Handler`, {
      x: xBin.toString(2),
      y: yBin.toString(2),
      op: flagsBin.toString(2),
    })
    .then((resp) => resp.data);
}

function toBin(arr, bits) {
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    res |= 1 << (bits - arr[i]);
  }
  return res.toString(2);
}

function newMessage(message) {
  data.output = message.split('');
  data.isDisabled = false;
}
