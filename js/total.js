function total() {
    const mobilePriceField = document.getElementById('mobile-price-field');
    const mobilePriceString = mobilePriceField.innerText;
    const mobilePrice = parseInt(mobilePriceString);
    const casePriceField = document.getElementById('case-total-price');
    const casePriceString = casePriceField.innerText;
    const casePrice = parseInt(casePriceString);
    const totalPrice = mobilePrice + casePrice;
    const subtotalField = document.getElementById('subtotal-field');
    subtotalField.innerText = totalPrice;
    const taxField = document.getElementById('tax-field');
    const taxAmount = totalPrice * 0.01;
    const taxValue = taxAmount.toFixed(2);
    taxField.innerText = taxValue;
    const totalField = document.getElementById('total-field');
    totalField.innerText = totalPrice + taxAmount;
}