import test from 'ava';

{
  let var1, var2;
}

test.failing('one-variable-per-declaration', t => {
	//create test
	t.fail();
});