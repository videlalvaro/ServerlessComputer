const df = require("durable-functions");
const fs = require("fs");
// const qs = require('querystring');

module.exports = async function (context, req) {
    console.log(req)

    if (req.method == 'GET') {
        const page = fs.readFileSync("./panel/alu.html", "utf8")
        return {
            status: 200,
            body: page,
            headers: {
                "Content-Type": "text/html"
            }
        }
    } else if (req.method == 'POST') {
        const client = df.getClient(context);
        // const reqBody = qs.parse(req.body);
        console.log("body: ", req.rawBody);
        const input = JSON.parse(req.rawBody)
        const instanceId = await client.startNew("Alu", null, {x: input.x, y: input.y, op: input.op});
        return {
            status: 200,
            body: "Running...",
            headers: {
                "Content-Type": "text/plain"
            }
        }
    }
};