
var timezone = 'undefined' == typeof window
  ? require('..')
  : require('viatropos-timezone'); // how to do this better?

var assert = require('assert');

describe('timezone', function(){
  it('CST', function(){
    var a = new Date('2013-12-02 PST');
    var b = timezone('cst', a);
    assert(a < b);
    assert(b.getHours() == a.getHours() + 2);
  });
});