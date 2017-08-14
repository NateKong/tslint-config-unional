import test from 'ava';

// typedef: call-signature
function foo(a: string) {
  return 123;
}

test('typedef: call-signature', t => {
	const num = foo('string');
	t.not(typeof(num), typeof('string'));
})