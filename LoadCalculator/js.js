function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("interest-rate").value;
  monthstopayValue = document.getElementById("month-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthstopayValue;
  monhtlypayment = (loanAmountValue / monthstopayValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `
  Monthly Payment: ${monhtlypayment}
  `;
}
