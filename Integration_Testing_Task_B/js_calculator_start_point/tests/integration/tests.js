var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })
 //Do the number buttons work to update the display of the running total?
 //It's unclear what exactly is required here as sample test proves this.
 //Have shown an additional test above which builds on 'should have working
 //numbers buttons' to show that running total updates in browser window.

 it('should have a working add button', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('10')
 })


 it('should have a working subtract button', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-6')
 })

 it('should have a working divide button', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number8')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('3')
 })

 it('should have a working multiply button', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#number4')).click();
    element(by.css('#number5')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number6')).click();
   element(by.css('#number7')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('23115')
 })

 it('should chain multiple operations together', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number6')).click();
   element(by.css('#number7')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('268')
 })

 //all tests above provide a positive number hence all prove the calculator
 //can handle positive numbers

it('should be able to handle decimal numbers as result when dividing', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1.25')
})

it('should be able to handle negative numbers an end result', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number8')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-79')
})

it('should be able to handle very large numbers - test subtract', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
    element(by.css('#number0')).click();
      element(by.css('#number0')).click();
        element(by.css('#number0')).click();
          element(by.css('#number0')).click();
            element(by.css('#number0')).click();
              element(by.css('#number0')).click();
                element(by.css('#number0')).click();
                  element(by.css('#number0')).click();
                    element(by.css('#number0')).click();
                      element(by.css('#number0')).click();
                        element(by.css('#number0')).click();
                          element(by.css('#number0')).click();
                            element(by.css('#number0')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('99999999999999')
})

it('should be able to handle very large numbers - multiplying', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
    element(by.css('#number0')).click();
      element(by.css('#number0')).click();
        element(by.css('#number0')).click();
          element(by.css('#number0')).click();
            element(by.css('#number0')).click();
              element(by.css('#number0')).click();
                element(by.css('#number0')).click();
                  element(by.css('#number0')).click();
                    element(by.css('#number0')).click();
                      element(by.css('#number0')).click();
                        element(by.css('#number0')).click();
                          element(by.css('#number0')).click();
                            element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('100000000000000000')
})

// in original code if divide by zero then result shows 'Infinity' on the screen.
// prefer result to be '0'

it('should display 0 if total is divided by 0', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0')
})



});
