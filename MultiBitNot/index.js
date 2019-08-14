const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const bits = input.a.split("");

    const tasks = [];
    for (var bit of bits) {
        tasks.push(context.df.callActivity("Not", {a: bit}))
    }

    const results = yield context.df.Task.all(tasks);
    var out = ""
    for (var res of results) {
        out += res.out
    }
    return {out: out}
});