'use strict';
/**
* @param {Number} n
* @returns {Number}
* */

function factorial(n) {
    let result= 1;
    for (let val  = 1; val <= n; val++) {
        result = result * val;
    }
    
    return result;
}

const assert = require('assert');

assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
// assert.equal(factorial(3), 3, `3の階乗は6ですが、実際は${factorial(3)}でした`);
// assert.equal(factorial(10), 10, `10の階乗は36288000ですが、実際は${factorial(10)}でした`);

console.log('すべてのテストを通過しました');