import test from 'ava';

// typedef: call-signature
function foo(a: string) {
  return '123';
}

// typedef: member-variable-declaration
class Foo {
  something = 1;
}

test('typedef', t => {
	const a = foo('string');
	t.is(typeof(a), typeof('string'));
});