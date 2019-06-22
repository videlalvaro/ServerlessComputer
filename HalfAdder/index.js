const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const childId = context.df.childId + ":HalfAdder:Xor";
    const sum = yield context.df.callSubOrchestrator("Xor", input, childId)
    const carry = yield context.df.callActivity("And", input)
    return {sum: sum.out, carry: carry.out}
});