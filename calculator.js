window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.querySelector('#loan-amount').value = 0;
  document.querySelector('#loan-years').value = 0;
  document.querySelector('#loan-rate').value = 0;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amount = document.querySelector('#loan-amount');
  let years = document.querySelector('#loan-years');
  let rate = document.querySelector('#loan-rate');
  let span = document.querySelector('span');
  let i = (rate.value / 100) / 12;
  let n = years.value * 12;
  let monthly = (amount.value * i) / (1 - ((1 + i) ** -n));
  span.innerText = `${monthly.toFixed(2)}`;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let i = (values.rate / 100) / 12;
  let n = values.years * 12;
  let monthly = (P * i) / (1 - ((1 + i) ** -n));
  return monthly.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
