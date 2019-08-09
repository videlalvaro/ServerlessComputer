const df = require("durable-functions");
const { normalizeInput } = require('../lib/utils.js');

module.exports = df.orchestrator(function* (context) {
    const input = context.df.getInput();
    const bits_a = normalizeInput(input.a)
    const bits_b = normalizeInput(input.b)
    const childId = context.df.childId + ":0";

    const out1 = yield context.df.callSubOrchestrator("HalfAdder", {a: bits_a[0], b: bits_b[0]}, "Add16:HalfAdder:" + childId)
    const out2 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[1], b: bits_b[1], c: out1.carry}, "Add16:FullAdder:" + childId)
    const out3 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[2], b: bits_b[2], c: out2.carry}, "Add16:FullAdder:" + childId)
    const out4 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[3], b: bits_b[3], c: out3.carry}, "Add16:FullAdder:" + childId)
    const out5 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[4], b: bits_b[4], c: out4.carry}, "Add16:FullAdder:" + childId)
    const out6 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[5], b: bits_b[5], c: out5.carry}, "Add16:FullAdder:" + childId)
    const out7 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[6], b: bits_b[6], c: out6.carry}, "Add16:FullAdder:" + childId)
    const out8 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[7], b: bits_b[7], c: out7.carry}, "Add16:FullAdder:" + childId)
    const out9 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[8], b: bits_b[8], c: out8.carry}, "Add16:FullAdder:" + childId)
    const out10 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[9], b: bits_b[9], c: out9.carry}, "Add16:FullAdder:" + childId)
    const out11 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[10], b: bits_b[10], c: out10.carry}, "Add16:FullAdder:" + childId)
    const out12 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[11], b: bits_b[11], c: out11.carry}, "Add16:FullAdder:" + childId)
    const out13 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[12], b: bits_b[12], c: out12.carry}, "Add16:FullAdder:" + childId)
    const out14 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[13], b: bits_b[13], c: out13.carry}, "Add16:FullAdder:" + childId)
    const out15 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[14], b: bits_b[14], c: out14.carry}, "Add16:FullAdder:" + childId)
    const out16 = yield context.df.callSubOrchestrator("FullAdder", {a: bits_a[15], b: bits_b[15], c: out15.carry}, "Add16:FullAdder:" + childId)

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