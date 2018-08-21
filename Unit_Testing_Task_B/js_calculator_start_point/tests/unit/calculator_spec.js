var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add figures together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5)
  })

  it('should subtract figures', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-')
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('should multiply figures', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(5);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })

  it('should divide figures', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/')
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('should concatenate figures', function(){
    calculator.numberClick(20);
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 202);
  })

  it('should chain muliple operations together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(10);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should clear screen back to 0', function(){
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0);
  })

});
