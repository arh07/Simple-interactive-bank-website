// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const totalDeposit = document.getElementById('total-deposit');

    const previousAmountText = totalDeposit.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const finalDeposit = previousAmount + depositAmount;
    totalDeposit.innerText = finalDeposit;

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const balancetotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balancetotalText);

    const finalDollar = balanceAmount + depositAmount;
    balanceTotal.innerText = finalDollar;

    depositInput.value = '';
})

// money withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newwithdrawInput = parseFloat(withdrawInputText);

    const withdrawDeposit = document.getElementById('totalWithdraw-deposit');
    const WithdrawDeposittext = withdrawDeposit.innerText;
    const previouswithdrawDeposit = parseFloat(WithdrawDeposittext);

    const finalWithdrawDeposit = newwithdrawInput + previouswithdrawDeposit;

    withdrawDeposit.innerText = finalWithdrawDeposit;

    // reduce balance from total amount
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalTexts = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalTexts);

    const totalWithdrawMoney = previousBalanceTotal - newwithdrawInput;

    balanceTotal.innerText = totalWithdrawMoney;
    withdrawInput.value = '';



})