
it('should calculate the monthly rate correctly', function () {
  var values = {
    amount: 10000,
    years: 5,
    rate: 7.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('200.38');
});


it("should return a result with 2 decimal places", function() {
  var values ={
    amount: 100000,
    years: 10,
    rate: 3.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('988.86');
});
