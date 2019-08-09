const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const bits_a = input.a;
    const bits_b = input.b;

    const tasks = [];
    for (var i = 0; i < bits_a.length; i++) {
        tasks.push(context.df.callActivity("And", {a: bits_a[i], b: bits_b[i]}))
    }

    const results = yield context.df.Task.all(tasks);
    var out = ""
    for (var res of results) {
        out += res.out
    }
    return {out: out}
});