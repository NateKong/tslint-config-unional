import test from 'ava';

/* tslint:disable:no-unused-variable */
let noConstruct = new String('s');

test.failing.skip('no-construct', t => {
	t.pass();
});