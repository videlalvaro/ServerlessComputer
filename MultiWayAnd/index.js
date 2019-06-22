const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput()
    const bits_a = input.a.split("")
    var curr = {out: "1"}
    for (var prev of bits_a) {
        curr = yield context.df.callActivity("And", {a: curr.out, b: prev})
    }
    return curr
});