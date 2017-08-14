import test from 'ava';

test('max-line-length', t=>{
	try{
		export function veryLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongLongName() { return 'still good' }
		t.pass();
	}catch (e){
		t.fail();
	}
});