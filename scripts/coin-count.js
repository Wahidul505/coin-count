document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeAmount = document.getElementById('income-input').value;
  const foodAmount = document.getElementById('food-input').value;
  const rentAmount = document.getElementById('rent-input').value;
  const clothesAmount = document.getElementById('clothes-input').value;
  const expensesTotal = document.getElementById('expenses-total');
  const balanceTotal = document.getElementById('balance-total');
  if (!isNaN(incomeAmount) && !isNaN(foodAmount) && !isNaN(rentAmount) && !isNaN(clothesAmount)) {
    if (incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {
      const expensesTotalAmount = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);
      if (expensesTotalAmount < incomeAmount) {
        expensesTotal.innerText = expensesTotalAmount;
        balanceTotal.innerText = parseFloat(incomeAmount) - parseFloat(expensesTotalAmount);
      }
      else {
        alert('You are expending more money than your Balance');
      }

    }
    else {
      alert('Please,Enter Positive Number');
    }
  }
  else {
    alert('Please, Enter a Valid Input');
  }
})
// event handler for savings 
document.getElementById('save-btn').addEventListener('click', function () {
  const savings = document.getElementById('save-input').value;
  const balanceTotal = document.getElementById('balance-total');
  const savingAmountTotal = balanceTotal.innerText * (savings / 100);
  if (savingAmountTotal > 0) {
    if (savingAmountTotal < balanceTotal.innerText) {
      const savingAmount = document.getElementById('saving-amount');
      savingAmount.innerText = parseFloat(savingAmountTotal.toFixed(2));
      document.getElementById('remaining-balance').innerText = parseFloat(balanceTotal.innerText) - parseFloat(savingAmount.innerText);
    }
    else {
      alert('You do not have enough money to save');
    }
  }
  else {
    alert('Please, Enter a Valid Parcentage');
  }
})