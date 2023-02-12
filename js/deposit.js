// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For the field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value || 0;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the current deposit total
    // for none-input (element other than input, textarea) use .innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText || 0;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step-4: set the number to set the total deposit
    const currentDepositTotal =previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalaceTotalString = balanceTotalElement.innerText|| 0;
    const previousBalaceTotal = parseFloat(previousBalaceTotalString);

    // step-6: calculate current total
    const currentBalanceTotal = previousBalaceTotal + newDepositAmount;
    
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-4: clear the deposit field
    depositField.value = '';
})