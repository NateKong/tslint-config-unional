import test from 'ava';

const c = 'still good';//function veryLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongName() { return 'still good'; }
test('max-line-length', t=>{
	t.is(c, 'still good');
});