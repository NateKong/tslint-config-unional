/* tslint:disable:no-unused-variable */
let array = [
    {
        test: function (c) {
            return r => {
                setTimeout(() => {
                    r(c * c);
                }, 1);
            };
        }
    },
    {
        test: function (c) {
            return c * c;
        }
    },
    {
        tst: function (c) {
            return c * c;
        }
    }
];
let x = { x: 1, b: 2 };
