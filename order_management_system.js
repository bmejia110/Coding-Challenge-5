//Task 1: Create an Orders Array of Order Objects
let inventory = [ // creates an inventory array for products
    {name: "espresso", price: 5, quantity: 20}
    {name: "cappuccino", price: 6, quantity: 30}
    {name: "latte", price: 4, quantity: 10}
    {name: "frappucino", price: 7, quantity: 8}
];

//Task 2: Create an Orders Array of Order Objects

let orders = []; // creates an empty aarray to store customer orders

//Task 3: Create a Function to Place an Order

function placeorder(customername, itemsordered) {
    let available = itemsordered.every(itemsordered => { // checks if all items are in stock
        let product = inventory.find(p => p.name === itemsordered.name); // finds the product in the inventory
        return product && product.quantity >= itemsordered.quantity; // returns true if product has enough stock
    });
    if (!available) // if item is not available
        console.log("One or more items not available"); // error messgae logged
    else {
        itemsordered.foreach(itemsordered => { //itterates over each item
            let product = inventory.find(p => p.name === itemsordered.name);
            product.quantity -= itemsordered.quantity;
        });
        orders.push({ customername, items: itemsordered, status: "pending"}); // adds a new order the array eith staus as pending
    }
}

//Task 4: Create a Fucntion to Calculate Total for an Order

let calculateOrderTotal = order => // defined arrow function that takes orders as parameter
    order.items.reduce((total, itemsordered) => {  // finds the product by name
        let product = inventory.find(product => product.name === itemsordered.name);
        return total + (product.price * itemsordered.quantity);
    }, 0);

//Task 5: Create a Function to Mark an Order as Completed

function completeOrder(customerName) { // 
    let order = orders.find(order => ordercustomerName === customerName); // 
    if (order) {
        order.status = "completed";
    } else {
        console.log("order is not found")
    }
};

//Task 6: Create a Function to Check Pending Orders

function checkPendingOrders() {
    orders.forEach(order => {
        if (order.status === "pending") {
         console.log("customer name: " + order.customername + "; Status: " + order.status);
         console.log("items");
         order.items.foreach(item => {
            console.log("" + item.name+ ""+ item.quantity);
         });
        }
    });
}