//create var to hold balance

// create function to deposit money
// ask for amount to deposit
// update balance
// log success message with update balance

// create a function to withdraw
// ask amount to withdraw
// check if balance is enough
// if true: withdraw success and show current balance
// if false: withdraw not sucessful and show current balance

// SOLUTION

var balance = 0;

function depositAmount() {
  var amountDeposited = parseInt(prompt("Enter amount to deposit"));
  balance += amountDeposited;
  alert(`N${amountDeposited}  Successfully Deposited`);
  alert(`New Balance N${balance}`);
  console.log(amountDeposited);
  console.log(balance);
}

depositAmount();

function withdrawAmount() {
  var amountWithdrawn = parseInt(prompt("Enter amount to withdraw"));
  if (balance >= amountWithdrawn) {
    balance -= amountWithdrawn;
    alert(`N${amountWithdrawn}  Successfully Withdrawn`);
    alert(`New Balance N${balance}`);
    console.log(amountWithdrawn);
    console.log(balance);
  } else {
    alert(`Insufficient Balance`);
    console.log(amountWithdrawn);
    console.log(balance);
  }
}
withdrawAmount();
