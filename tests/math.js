const multiply = require('../app/service/multiply.js');
const expect = require('chai').expect;
// normal test
describe('Math must be right', function () {
  it("1 by 2 equals 2", function () {
    expect(multiply(1, 2)).to.be.equal(2);
  });
});
// async test
describe('Eventually the test will finish', function () {
  this.timeout(2100); // allow for enough time to finish the call
  it('1 by 2 equals 2 in 2 seconds', function (done) {
    this.timeout(2100);
    setTimeout(function () {
      expect(multiply(1, 2)).to.be.equal(2);
      done();
    }, 2000);
  });
});
