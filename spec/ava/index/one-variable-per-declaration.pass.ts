import test from 'ava';

for (let i = 0, j = 1; i < j; i++) {
  j = 100;
}

test.skip('one-variable-per-declaration', t => {
	//create test
	t.pass();
});