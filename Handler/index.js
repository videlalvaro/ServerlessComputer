const df = require("durable-functions");

module.exports = async function (context, req) {
    const client = df.getClient(context);
    console.log("body: ", req.rawBody);
    const input = JSON.parse(req.rawBody)
    const instanceId = await client.startNew("Alu", null, { x: input.x, y: input.y, op: input.op });
    context.res = {
        status: 200,
        body: "Running...",
        headers: {
            "Content-Type": "text/plain"
        }
    }
};