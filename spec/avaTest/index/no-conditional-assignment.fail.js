"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
let a, y;
if (a = y) {
    y++;
}
ava_1.default.failing('no-conditional-assignments', t => {
    t.is(a, y);
});
