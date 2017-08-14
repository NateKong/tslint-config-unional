import test from 'ava';

/* tslint:disable:no-unused-variable */
let maxLienLength = 'this is a line that is necessary longer than normal. More stuff................................................................ ................................................. ..............................................';

test('max-line-length', t => {
	t.is(+maxLienLength.length, 224);
});