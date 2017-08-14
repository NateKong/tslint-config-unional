"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
for (let i = 0, j = 1; i < j; i++) {
    j = 100;
}
ava_1.default.skip('one-variable-per-declaration', t => {
    //create test
    t.pass();
});
