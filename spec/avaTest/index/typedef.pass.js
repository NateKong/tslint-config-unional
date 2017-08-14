"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
// typedef: call-signature
function foo(a) {
    return '123';
}
// typedef: member-variable-declaration
class Foo {
    constructor() {
        this.something = 1;
    }
}
ava_1.default('typedef', t => {
    const a = foo('string');
    t.is(typeof (a), typeof ('string'));
});
