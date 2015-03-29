/**
 * @fileOverview Google Code Jam template for NodeJS.
 *
 * How to run this script:
 *
 * 1. Install NodeJS (https://nodejs.org)
 * 2. npm install underscore
 * 3. node index.js < data.in > data.out
 */

'use strict';

var _ = require('underscore');

/**
 * Solve a test case.
 *
 * @param {number} id ID of test case.
 * @param {...*} args Parameters needed by test case.
 */
var solve = function (id) {
  var res;

  console.log('Case #' + id + ': ' + res);
};

var main = function (input) {
  var id,
      numTests = input.nextNumber();

  for (id = 1; id <= numTests; ++id) {
    solve(
      id,

      // Put parameters needed by test case here.
      input.next()
    );
  }
};

var Input = function (string) {
  var idx = 0,
      strings = string.split('\n'),
      len = strings.length;

  var toNumber = function (obj) {
    console.assert(_.isFinite(obj));

    return +obj;
  };

  this.next = function () {
    console.assert(idx < len);

    return strings[idx++];
  };

  this.nextNumber = function () {
    return toNumber(this.next());
  };

  this.nextNumbers = function (sep) {
    return this.nextArray(sep).map(toNumber);
  };

  this.nextArray = function (sep) {
    return this.next().split(sep || /\s+/);
  };
};

(function init() {
  var string = '';

  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', function () {
    string += process.stdin.read();
  });

  process.stdin.once('end', function () {
    main(new Input(string));
  });
}());
