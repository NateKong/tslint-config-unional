import test from 'ava';

/* tslint:disable:no-unused-variable */
let array = [
  {
    test: function (c): Function {
      return r => {
        setTimeout(() => {
          r(c * c);
        }, 1);
      };
    }
  },
  {
    test: function (c): number {
      return c * c;
    }
  },
  {
    tst: function (c): number {
      return c * c;
    }
  }
];

let x = { x: 1, b: 2 };

//skip
test.skip('trailing-comma', t => {
  //create test
  t.pass();
});