function mobileNumberField(isIncrease) {
    const numberField = document.getElementById('mobile-amount-field');
    const numberFieldString = numberField.value;
    const numberFieldValue = parseInt(numberFieldString);

    if (isIncrease === 'true') {

        numberField.value = numberFieldValue + 1;
        return numberField.value;
    }
    else {
        numberField.value = numberFieldValue - 1;
        return numberField.value
    }
}
function setPhoneTotalPrice(amount) {
    const priceField = document.getElementById('mobile-price-field');
    const amountValue = parseInt(amount);
    priceField.innerText = 1219 * amountValue;
}
document.getElementById('mobile-plus-btn').addEventListener('click', function () {
    const mobileNumber = mobileNumberField('true');
    const value = parseInt(mobileNumber)
    setPhoneTotalPrice(value);
    total()
})
document.getElementById('mobile-minus-btn').addEventListener('click', function () {
    const mobileNumber = mobileNumberField('false');
    const value = parseInt(mobileNumber)
    setPhoneTotalPrice(value)
    total()
})
