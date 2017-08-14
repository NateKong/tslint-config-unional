"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
/* tslint:disable:no-unused-variable */
// good
// ok
// Okey too
/**
 * My commentFormat function
 * @var {string} p1 some input value
 * @var {number} [p2] some optional value
 */
function commentFormat(p1, p2 = 2) {
    return false;
}
ava_1.default('comment-format', t => {
    t.false(commentFormat('string', 2));
});
