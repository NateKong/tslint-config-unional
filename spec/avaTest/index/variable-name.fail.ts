import test from 'ava';

/* tslint:disable:no-unused-variable */
let PascalName = {};

//skip
test.failing.skip('variable-name', t => {
	//create test
	t.fail();
});