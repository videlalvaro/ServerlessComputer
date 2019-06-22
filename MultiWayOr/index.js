const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput()
    const bits_a = input.a.split("")
    var curr = {out: "0"}
    for (var prev of bits_a) {
        curr = yield context.df.callActivity("Or", {a: curr.out, b: prev})
    }
    return curr
});