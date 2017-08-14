import test from 'ava';

/* tslint:disable:no-empty */
class MemberAccess {
  someProperty: string;
  constructor() { }
  someFunction(): void { }
}

test.skip('member-access', t => {
	//create test
	t.pass();
});