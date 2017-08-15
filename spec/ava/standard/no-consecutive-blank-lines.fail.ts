import test from 'ava';

test.failing('consecutive-blank-lines', t=> {
	try{
		let y = 0;
		

		y = 1;
		
		t.pass();
	}catch (e){
		t.fail();
	}


});

