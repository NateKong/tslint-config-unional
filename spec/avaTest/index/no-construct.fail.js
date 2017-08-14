"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
/* tslint:disable:no-unused-variable */
let noConstruct = new String('s');
ava_1.default.failing.skip('no-construct', t => {
    t.pass();
});
