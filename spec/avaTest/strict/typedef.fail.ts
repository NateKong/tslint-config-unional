import test from 'ava';

// typedef: call-signature
function foo(a: string) {
  return 123;
}


test.failing('typedef: call-signature', t => {
	const num = foo('string');
	t.is(num, typeof('string');
})