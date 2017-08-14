import test from 'ava';

let a, y;
if (a = y) {
  y++;
}

test.failing('no-conditional-assignments', t => {
	t.is(a,y);
});
