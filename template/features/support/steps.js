// features/support/steps.js
const { Given, When, Then } = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
const { expect } = require('chai');
const { assert } = require('chai');

setDefaultTimeout(60 * 1000);

// simple_math feature
Given('a variable set to {int}', function(number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function(number) {
  this.incrementBy(number);
});

Then('the variable should contain {int}', function(number) {
  expect(this.store.state.base.count).to.eql(number);
});

// simple_api feature
Given('an array with length set to {int}', function(number) {
  this.setArray();
});
// async step
When('I send a get message request', async function() {
  await this.getMessages();
});

Then('the array length should be {int}', function(number) {
  expect(this.store.state.base.messages.length).to.eql(number);
});

