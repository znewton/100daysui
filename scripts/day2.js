
var unitPrice = 320;
var quantity = 3;
var totalPrice = quantity * unitPrice;

function changeQuantity(amount) {
    if(quantity > 0 || amount > 0) {
        quantity += amount;
        totalPrice = quantity * unitPrice;
        document.getElementById('total-price').innerHTML = parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
        document.getElementById('quantity').innerHTML = ("0" + quantity).slice(-2);
    }
}
function init(){
    document.getElementById('unit-price').innerHTML = parseFloat(Math.round(unitPrice * 100) / 100).toFixed(2);
    document.getElementById('total-price').innerHTML = parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
    document.getElementById('quantity').innerHTML = ("0" + quantity).slice(-2);

    document.getElementById('increase-quantity').onclick = function(){return changeQuantity(1)};
    document.getElementById('decrease-quantity').onclick = function(){return changeQuantity(-1)};
}
init();