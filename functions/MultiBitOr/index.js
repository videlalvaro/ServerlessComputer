const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput()
    const bits_a = input.a.split("")
    const bits_b = input.b.split("")

    const tasks = [];
    for (var i = 0; i < bits_a.length; i++) {
        tasks.push(context.df.callActivity("Or", {a: bits_a[i], b: bits_b[i]}))
    }

    const results = yield context.df.Task.all(tasks);
    var out = ""
    for (var res of results) {
        out += res.out
    }
    return {out: out}
});