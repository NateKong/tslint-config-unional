import test from 'ava';

//skip
test.skip('new test', (t)=> {
	t.is(1+2, 3);
});

//pass
test('typedef.fail', async (t) => {
	t.is(await fn(), 'foo');
});