/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input into a number by using parseFloat 2.5. also make sure to convert the input into a number by using parseFloat 
3. Get previous withdraw total
4. calculate total withdraw amount
5-6. set total withdraw amount
5. get the previous balance total


7. clear the input field


*/

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value || 0;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText || 0;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalaceTotalString = balanceTotalElement.innerText || 0;
    const previousBalaceTotal = parseFloat(previousBalaceTotalString);

    // step-6
    if(newWithdrawAmount > previousBalaceTotal ){
        alert('Porjapto balace nai')
        return;
    }
    
    const newBalaceTotal = previousBalaceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalaceTotal;

    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    


    // step-7
    withdrawField.value = '';
})