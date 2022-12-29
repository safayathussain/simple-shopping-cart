function caseNumberField(isIncrease) {
    const numberField = document.getElementById('case-amount-field');
    const numberFieldValueString = numberField.value;
    const numberFieldValue = parseInt(numberFieldValueString);
    if (isIncrease === 'true') {
        numberField.value = numberFieldValue + 1;
        return numberField.value;
    }
    else {
        numberField.value = numberFieldValue - 1;
        return numberField.value;
    }
}
function setCaseTotalPrice(amount) {
    const caseTotal = document.getElementById('case-total-price');
    const amountValue = parseInt(amount);
    caseTotal.innerText = 59 * amountValue;
}

document.getElementById('case-plus-btn').addEventListener('click', function () {
    const amount = caseNumberField('true');
    setCaseTotalPrice(amount);
    total()
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const amount = caseNumberField('false')
    setCaseTotalPrice(amount)
    total()
})