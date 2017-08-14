"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
/* tslint:disable:no-unused-variable */
let maxLienLength = 'this is a line that is necessary longer than normal. More stuff................................................................ ................................................. ..............................................';
ava_1.default('max-line-length', t => {
    t.is(+maxLienLength.length, 224);
});
