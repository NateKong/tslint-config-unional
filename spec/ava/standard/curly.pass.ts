import test from 'ava';

let curly = 3;

if (curly) {
  curly = 1
}
else if (curly - 1) {
  curly = 9
}
else {
  curly = 4
}

if (curly)
  curly = 2

test("curly", t=>{
	t.is(curly, 2);
})