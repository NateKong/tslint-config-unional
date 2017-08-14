"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
/* tslint:disable:no-empty no-unused-variable */
class MemberOrdering {
    static someStaticMethod() { }
    constructor() { }
    someFunction() { }
    somePrivateFunction() { }
}
//skip
ava_1.default.skip('member-ordering', t => {
    //create test
    t.pass();
});
