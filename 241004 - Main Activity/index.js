// Store Information
const storeName = 'Elec-Store';
const storeLocation = 'San Pedro Laguna';
let storeCapacity = 999; // Maximum Capacity

// Initial array of products
const products = [
    { name: 'Laptop', 
      price: 18999, 
      quantity: 50 },
    { name: 'Smartphone',
      price: 9999,
      quantity: 100 },
    { name: 'Tablet',
      price: 12999,
      quantity: 80 }];

// Function to check the current inventory capacity
function checkInventoryCapacity() {
  // Calculate total inventory by summing quantities of all products
 const totalInventory = products.reduce((currentVal, indexProduct) => {
    return currentVal + indexProduct.quantity;
  }, 0);

  // Warn if the total inventory exceeds the store capacity
  if (totalInventory > storeCapacity) {
    console.log('Warning Store Capacity Exceeds');
  }

  return totalInventory; // Return the total inventory
}

// Function to add a product to the inventory
function addProduct(productName, price, quantity) {
  const checkCap = checkInventoryCapacity(); // Check current inventory capacity
  
  // Validate price and quantity
  if (price <= 0) {
    console.log('Price cannot be negative.');
    return; // Exit if price is invalid
  }
  if (quantity <= 0) {
    console.log('Quantity cannot be negative.');
    return; // Exit if quantity is invalid
  }
  // Check if adding the new product exceeds store capacity
  if (Number(checkCap) + Number(quantity) > storeCapacity) {
    console.log('Store is at full capacity, cannot add new products.');
    return; // Exit if capacity is exceeded
  }

  // Add tpush the new product to the inventory
  products.push({ 
    name: productName, 
    price: price, 
    quantity: quantity 
  });

}

// Function to remove a product from the inventory
function removeProduct(productName, quantity) {
  // Validate quantity
  if (quantity <= 0) {
    console.log('Quantity must be greater than zero.');
    return; // Exit if quantity is invalid
  }

  // Find the product in the inventory
  const productIndex = products.find((indexProduct) => {
    return indexProduct.name === productName;
  });

  // If the product is not found, log a message and exit
  if (!productIndex) {
    console.log(`Product "${productName}" not found.`);
    return;
  }

  // Calculate new quantity after removal
  const newQuantity = productIndex.quantity - quantity;
  
  // Check if new quantity is negative
  if (newQuantity < 0) {
    console.log('Item quantity should not be negative');
    restockProduct(productName, quantity); 
    // Product Removal Edge Cases if user input negative quantity
    // Call restock if quantity is negative
  } else {
    // Update quantity
    productIndex.quantity = newQuantity;
    console.log(`Updated ${productIndex.name} Quantity: ${productIndex.quantity}`);
    // initialize new value and console log message
  }
}

// Function to get the most expensive product in the inventory
function getMostExpensiveProduct() {
  let mostExpensive = products[0]; // Start with the first product

  // Iterate through products to find the most expensive one
  products.forEach((indexProduct) => {
    if (indexProduct.price > mostExpensive.price) {
      mostExpensive = indexProduct; // Update if a more expensive product is found
    }
  });
  // Return the name and price of the most expensive product
  const stringResult = `${mostExpensive.name}: ${mostExpensive.price}`;
  return stringResult;
}

// Function to calculate the totalp value of inventory
function calculateTotalInventoryValue() {
  // Sum the value of all products (price * quantity)
  const totalValue = products.reduce((currentVal, indexProduct) => {
    return currentVal + indexProduct.price * indexProduct.quantity;
  }, 0);

  return totalValue; // Return the total value
}

// Function to restock a product if its quantity falls below a threshold
function restockProduct(productName, threshold) {
  products.forEach((indexProduct) => {
    // Restock if product is found and its quantity is below or equal to threshold
    if (indexProduct.name === productName && indexProduct.quantity <= threshold) {
      indexProduct.quantity += 20; // Add 20 to the quantity
    }
  });

  console.log(products); // console log the updated products list
}

// prompt user for a new product and add it to the inventory
const newProduct = prompt("Input New Product Name!");
const newPrice = prompt("Input the price");
const newQuantity = prompt("Input the quantity");
addProduct(newProduct, newPrice, newQuantity);

// prompt user if they want to remove a product
const remProduct = prompt('Would you like to remove a product?');

if (remProduct.toLowerCase() === 'yes') {
  const remProduct = prompt("Input product to remove");
  const removeQuantity = prompt("How many to be remove");

  removeProduct(remProduct, removeQuantity);
}

// Testing the functions
console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);
console.log(`Total Number of Products: ${checkInventoryCapacity()}`);
console.log(`Total Inventory Value: ${calculateTotalInventoryValue()}`);
console.log(`Most Expensive Product: ${getMostExpensiveProduct()}`);
addProduct('PS5', 24999, 999);
removeProduct('Nintendo Switch', 5);
restockProduct('Nintendo Switch', 10);