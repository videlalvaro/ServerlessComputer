const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput()
    const childId = context.df.childId + ":HalfAdder:Xor";
    const first = yield context.df.callSubOrchestrator("HalfAdder", {a: input.a, b: input.b}, childId + ":0")
    const second = yield context.df.callSubOrchestrator("HalfAdder", {a: input.c, b: first.sum}, childId + ":0")
    const carry = yield context.df.callActivity("Or", {a: first.carry, b: second.carry})
    return {sum: second.sum, carry: carry}
});