# The World's First Serverless Computer

This project implements an ALU (Arithmetic Logic Unit) using [Azure Functions](https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-overview?WT.mc_id=serverlesscomputer-GitHub-alvidela) as logic gates. Yes you read that right, we went over the top and put the server back in serverless.

![Serverless Computer](https://github.com/videlalvaro/ServerlessComputer/blob/master/docs/serverless_computer.png)

## How does it work

The logic gates `AND`, `OR` & `NOT`, are implemented using [Activity Functions](https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-types-features-overview?WT.mc_id=serverlesscomputer-GitHub-alvidela#activity-functions).

Using them as building blocks we implemented a [HalfAdder](https://github.com/videlalvaro/ServerlessComputer/blob/master/HalfAdder/index.js), a [FullAdder](https://github.com/videlalvaro/ServerlessComputer/blob/master/FullAdder/index.js), and so on to have a basic [16 Bit Adder chip](https://github.com/videlalvaro/ServerlessComputer/blob/master/Add16/index.js), and a [16 bit Incrementer chip](https://github.com/videlalvaro/ServerlessComputer/blob/master/Inc16/index.js).

The _chips_ are wired together using [Orchestrator Functions](https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-types-features-overview?WT.mc_id=serverlesscomputer-GitHub-alvidela#orchestrator-functions), so for example the [XOR](https://github.com/videlalvaro/ServerlessComputer/blob/master/Xor/index.js) chip calls a [Not](https://github.com/videlalvaro/ServerlessComputer/blob/master/Not/index.js) gate, an [And](https://github.com/videlalvaro/ServerlessComputer/blob/master/And/index.js) gate and an [Or](https://github.com/videlalvaro/ServerlessComputer/blob/master/Or/index.js) to calculate its result.

## ALU Features

The ALU follows the design from the [Nand to Tetris project](https://www.nand2tetris.org). In this case it implements the design from the second chapter of the book.

It takes two 16-bit data inputs, `x` and `y`, and 6 bits where the operations of the ALU are specified as follows:

```
zx: zero the x input
nx: negate the x input
zy: zero the y input
ny: negate the y input
f:  function code: 1 for Add, 0 for And
no: negate output
```

The ALU returns a 16-bit output with the result of the desired operation.

See it in action here: [https://alvidela-alu.azurewebsites.net/api/panel](https://alvidela-alu.azurewebsites.net/api/panel)

## How to call the ALU

In the future we want to have a nice frontend for the ALU, but for now we can work with curl:

```bash
curl -d "op=000011&x=101&y=10" -X POST https://alvidela-alu.azurewebsites.net/api/panel
```

The parameters are as follows:

```
op: the 6 bits params that set up the ALU as explained above (zx, nx, zy, ny, f, no)
x: 16-bit input (the ALU will normalize it to 16-bits)
y: 16-bit input (the ALU will normalize it to 16-bits)
```

The curl invocation will return a JSON object with a `statusQueryGetUri` key. Use the url there to obtain the return value of the invocation:

```bash
curl https://alvidela-alu.azurewebsites.net/runtime/webhooks/durabletask/instances/someinstanceid\?taskHub\=DurableFunctionsHub\&connection\=Storage\&code\=SomeCode
```

## Project Goals

Besides the little joke of implementing a computer like this, the goal is to have it as a project to learn different patterns that can be implemented using [Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=serverlesscomputer-GitHub-alvidela).

In the future, expect a series of articles detailing how we put the different building blocks together until we got a fully functioning ALU.

## Development

First, install all the dependencies by running:
`npm ci`

To run the project for development run the following command:

`npm run dev`

This command will start a server under the port 3000. `http://localhost:3000/`. We're running: React (NextJS).

### Folder Structure

The frontend application files are in `/src`

## Build

The following command will create a `src/out` folder ready to be deployed.

`npm run build`

## Acknowledgments

Thanks to my colleagues [Maxime Rouiller](https://github.com/MaximRouiller) and [Anthony Chu](https://github.com/anthonychu) for helping me understand Azure Functions.
