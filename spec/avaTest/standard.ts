import test from 'ava';

const fn = async () => Promise.resolve('foo');

//pass
test('foo test', async (t) => {
	t.is(await fn(), 'foo');
});

//fail
test('foo2 test', async (t) => {
	t.is(await fn(), 'bar');
});