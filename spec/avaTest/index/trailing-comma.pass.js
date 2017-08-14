"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
/* tslint:disable:no-unused-variable */
let array = [
    {
        test: function (c) {
            return r => {
                setTimeout(() => {
                    r(c * c);
                }, 1);
            };
        }
    },
    {
        test: function (c) {
            return c * c;
        }
    },
    {
        tst: function (c) {
            return c * c;
        }
    }
];
let x = { x: 1, b: 2 };
//skip
ava_1.default.skip('trailing-comma', t => {
    //create test
    t.pass();
});
