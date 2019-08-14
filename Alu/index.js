const df = require("durable-functions");
const { zero16, bit16 } = require('../lib/utils.js');

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const childId = context.df.childId + ":0";
    var bits_a = bit16(input.x);
    var bits_b = bit16(input.y);
    var out;
    const op = parseInt(input.op, 2);
    const ADD = true;

    const zx = (op & (1 << 5)) != 0
    const nx = (op & (1 << 4)) != 0
    const zy = (op & (1 << 3)) != 0
    const ny = (op & (1 << 2)) != 0
    const f  = (op & (1 << 1)) != 0
    const no = (op & (1 << 0)) != 0

    if (zx) {
        bits_a = zero16();
    }

    if (nx) {
        bits_a = yield context.df.callSubOrchestrator("MultiBitNot", {a: bits_a}, "Alu:MultiBitNot:" + childId);
    }

    if (zy) {
        bits_b = zero16();
    }

    if (ny) {
        bits_b = yield context.df.callSubOrchestrator("MultiBitNot", {a: bits_b}, "Alu:MultiBitNot:" + childId);
    }

    if (f === ADD) {
        out = yield context.df.callSubOrchestrator("Add16", {a: bits_a, b: bits_b}, "Alu:Add16:" + childId);
        out = out.sum;
    } else {
        out = yield context.df.callSubOrchestrator("MultiBitAnd", {a: bits_a, b: bits_b}, "Alu:MultiBitAnd:" + childId);
        out = out.out;
    }

    if (no) {
        out = yield context.df.callSubOrchestrator("MultiBitNot", {a: out}, "Alu:MultiBitNot:" + childId);
        out = out.out;
    }

    context.bindings.signalRMessages = [{
        "target": "newMessage",
        "arguments": [ out ]
    }];

    return { out: out }
});