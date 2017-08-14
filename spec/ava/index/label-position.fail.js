"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
//start:
const labelPosition = 1;
ava_1.default('label-position', t => {
    t.is(labelPosition, 1);
});
