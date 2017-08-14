"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
let curly = 3;
if (curly) {
    curly = 1;
}
else if (curly - 1) {
    curly = 9;
}
else {
    curly = 4;
}
ava_1.default.skip('curly', t => {
    //create test
    t.pass();
});
