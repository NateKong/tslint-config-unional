"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
let oneLine = 2;
if (oneLine) {
    oneLine = 1;
}
else {
    oneLine = 3;
}
try {
    oneLine = 2;
}
catch (e) {
    oneLine = 1;
}
finally {
    oneLine = 4;
}
//skip
ava_1.default.skip('one-line', t => {
    //create test
    t.pass();
});
