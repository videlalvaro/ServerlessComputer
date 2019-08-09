const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const not_a = yield context.df.callActivity("Not", {a: input.a});
    const not_b = yield context.df.callActivity("Not", {a: input.b});
    const and_1 = yield context.df.callActivity("And", {a: input.a, b: not_b.out});
    const and_2 = yield context.df.callActivity("And", {a: not_a.out, b: input.b});
    const output = yield context.df.callActivity("Or", {a: and_1.out, b: and_2.out});
    return output;
});