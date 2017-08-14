"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
const gulp = require("gulp");
// arrow function don't need to be typed
gulp.task('test', (done) => {
    // do stuff...
});
// typedef: call-signature
function foo(a) {
    return 123;
}
// typedef: member-variable-declaration
class Foo {
    constructor() {
        this.somthing = 1;
    }
}
