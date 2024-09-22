//Task 1: Create an Orders Array of Order Objects
let inventory = [
    {name: "espresso", price: 5, quantity: 20}
    {name: "cappuccino", price: 6, quantity: 30}
    {name: "latte", price: 4, quantity: 10}
    {name: "frappucino", price: 7, quantity: 8}
];

//Task 2: Create an Orders Array of Order Objects

let orders = [];

//Task 3: Create a Function to Place an Order

function placeorder(customername, itemsordered) {
    let available = itemsordered.every(itemsordered => {
        let product = inventory.find(p => p.name === itemsordered.name);
        return product && product.quantity >= itemsordered.quantity;
    });
    if (!available)
        console.log("One or more items not available");
    else {
        itemsordered.foreach(itemsordered => {
            let product = inventory.find(p => p.name === itemsordered.name);
            product.quantity -= itemsordered.quantity;
        });
        orders.push({ customername, items: itemsordered, status: "pending"});
    }
}

//Task 4: Create a Fucntion to Calculate Total for an Order

let calculateOrderTotal = order =>
    order.items.reduce((total, itemsordered) => {
        let product = inventory.find(product => product.name === itemsordered.name);
        return total + (product.price * itemsordered.quantity);
    }, 0);

//Task 5: Create a Function to Mark an Order as Completed

function completeOrder(customerName) {
    let order = orders.find(orders => orderscustomerName === customerName);
    if (order) {
        order.status = "completed";
    } else {
        console.log("order is not found")
    }
};