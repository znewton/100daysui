
var unitPrice = 320;
var quantity = 1;
var totalPrice = quantity * unitPrice;

function changeQuantity(amount) {
    quantity += amount;
    totalPrice = quantity * unitPrice;
    document.getElementById('total-price').innerHTML = parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
    document.getElementById('quantity').innerHTML = ("0" + quantity).slice(-2);
}
function init(){
    console.log('unit');
    document.getElementById('unit-price').innerHTML = parseFloat(Math.round(unitPrice * 100) / 100).toFixed(2);
    console.log('total');
    document.getElementById('total-price').innerHTML = parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
}
// init();
console.log(document.body);