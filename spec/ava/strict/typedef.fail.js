"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
// typedef: call-signature
function foo(a) {
    return 123;
}
ava_1.default('typedef: call-signature', t => {
    const num = foo('string');
    t.not(typeof (num), typeof ('string'));
});
