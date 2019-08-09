const df = require("durable-functions");
const { normalizeInput } = require('../lib/utils.js');

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const bits_a = normalizeInput(input.a)
    const childId = context.df.childId + ":0";

    const out1 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[0], b: "1"}, childId)
    const out2 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[1], b: out1.carry}, childId)
    const out3 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[2], b: out2.carry}, childId)
    const out4 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[3], b: out3.carry}, childId)
    const out5 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[4], b: out4.carry}, childId)
    const out6 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[5], b: out5.carry}, childId)
    const out7 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[6], b: out6.carry}, childId)
    const out8 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[7], b: out7.carry}, childId)
    const out9 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[8], b: out8.carry}, childId)
    const out10 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[9], b: out9.carry}, childId)
    const out11 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[10], b: out10.carry}, childId)
    const out12 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[11], b: out11.carry}, childId)
    const out13 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[12], b: out12.carry}, childId)
    const out14 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[13], b: out13.carry}, childId)
    const out15 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[14], b: out14.carry}, childId)
    const out16 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[15], b: out15.carry}, childId)

    const res = [
        out1.sum,
        out2.sum,
        out3.sum,
        out4.sum,
        out5.sum,
        out6.sum,
        out7.sum,
        out8.sum,
        out9.sum,
        out10.sum,
        out11.sum,
        out12.sum,
        out13.sum,
        out14.sum,
        out15.sum,
        out16.sum
    ]

    return {sum: res.reverse().join("")}
});