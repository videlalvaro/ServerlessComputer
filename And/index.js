module.exports = async function (context) {
    const out = parseInt(context.bindings.in['a'], 2) && parseInt(context.bindings.in['b'], 2)
    context.done(null, {out: out ? "1" : "0"});
};