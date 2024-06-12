const btnApply = document.getElementById('btn-apply');

function getTextFieldValue(textId) {
    const textFieldElement = document.getElementById(textId);
    const textFieldString = textFieldElement.innerText;
    const textField = parseFloat(textFieldString);
    return textField;
}

function addCalculationEntry(productName) {
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `
    <p class='text-2xl font-medium mb-4'>
    ${count + 1}. ${productName}
    </p>
    `;

    calculationEntry.appendChild(p);
}


function setValueForOutput(elementId) {
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);

    const newPrice = totalPrice + elementId;
    totalPriceElement.innerText = newPrice;

    if (newPrice > 100) {
        btnApply.removeAttribute('disabled');
    }
}

function applyCoupon() {
    const couponInputValue = document.getElementById('coupon-input');
    const couponInput = couponInputValue.value;


    const totalPriceElement = document.getElementById('total-price');
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);

    const discountPrice = document.getElementById('discount-price');
    const finalTotal = document.getElementById('final-total');
    const purchaseButton = document.getElementById('btn-purchase');

    const discount = (totalPrice / 100) * 20;
    if (couponInput === 'SELL20') {
        discountPrice.innerText = discount.toFixed(2);
        const finalTotalAmount = totalPrice - discount;
        finalTotal.innerText = finalTotalAmount;
        couponInputValue.value = '';
    }
    else {
        finalTotal.innerText = totalPrice;
    }

    if (totalPrice > 100) {
        purchaseButton.removeAttribute('disabled');
    }

}

function goHome() {
    location.reload();
}
