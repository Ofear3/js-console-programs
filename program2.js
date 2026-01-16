window.onload = function() {
let cart = [];
let itemCount = Number(prompt("How many items do you want to buy?"));

for (let i = 0; i < itemCount; i++) {
    let name = prompt(`Enter name of item ${i + 1}`);
    let price = Number(prompt(`Enter price of ${name}`));
    let qty = Number(prompt(`Enter quantity of ${name}`));

    cart.push({ name, price, qty });
}

let subtotal = 0;

console.log("-------- ITEMIZED BILL --------");
console.log("Item\tPrice\tQty\tTotal");

// cart.forEach(item => {
//     let total = item.price * item.qty;
//     subtotal += total;
//     console.log(`${item.name}\t${item.price}\t${item.qty}\t${total}`);
// });

cart.forEach(item=>{
    let total = item.price*item.qty;
    subtotal+=total;
    console.log(`${item.name}\t${item.price}\t${item.qty}`);
});

// Discount
let discount = 0;
if (subtotal > 1000) {
    discount = subtotal * 0.10;
}

// Tax
let tax = (subtotal - discount) * 0.18;

// Grand Total
let grandTotal = subtotal - discount + tax;

console.log("--------------------------------");
console.log("Subtotal:", subtotal.toFixed(2));
console.log("Discount:", discount.toFixed(2));
console.log("Tax (18%):", tax.toFixed(2));
console.log("Grand Total:", grandTotal.toFixed(2));
this.prompt("Check the console for the itemized bill! Press OK to exit.");

}