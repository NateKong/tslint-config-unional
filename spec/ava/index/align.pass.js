"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
function align(param1, param2, param3, param4) {
    let a = 1;
    a += param1 + param2 + param3 + param4
        + param1 + param2 + param3 + param4
        + param1 + param2 + param3 + param4
        + param1 + param2 + param3 + param4
        + param1 + param2 + param3 + param4
        + param1 + param2 + param3 + param4;
    return a;
}
align(0, 1, 2, 3);
{
    align(1, 2, 3, 4);
    align(1, 1, 1, 1);
}
//skip
ava_1.default.skip('align', (t) => {
    const a = align(0, 1, 2, 3);
    t.is(a, 37);
});
