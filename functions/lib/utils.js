function normalizeInput(input) {
    var ret = bit16(input);
    return ret.split("").reverse();
}

function normalizeInputAsString(input) {
    return normalizeInput(input).join("");
}

function bit16(input) {
    var ret;
    if (input.length > 16) {
        ret = input.substring(input.length - 16);
    } else if (input.length < 16) {
        ret = pad(input);
    } else {
        ret = input;
    }
    return ret;
}

function bit16AsArray(input) {
    return bit16(input).split("");
}

function pad(input) {
    var pad = "0000000000000000"
    return pad.substring(0, pad.length - input.length) + input;
}

function zero16() {
    return new Array(16).fill(0);
}

module.exports = {
    normalizeInput: normalizeInput,
    normalizeInputAsString: normalizeInputAsString,
    bit16: bit16,
    bit16AsArray: bit16AsArray,
    pad: pad,
    zero16: zero16
}