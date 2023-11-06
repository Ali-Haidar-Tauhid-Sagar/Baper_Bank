//Step-1:add event lisntener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step-2: get the deposite amount from the deposit input field
    const depositField = document.getElementById('deposite-field');
    //For input field use .value to get amount from the input field
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //Get total deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // clear field
    depositField.value = '';
})