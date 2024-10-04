const storeName = 'Elec-Store';

const storeLocation = 'San Pedro Laguna';

let storeCapacity = 999;

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

function checkInventoryCapacity() {
 const totalInventory = products.reduce((currentVal, indexProduct) => {
    return currentVal + indexProduct.quantity;
  }, 0);

  if (totalInventory > storeCapacity) {
    console.log('Warning Store Capacity Exceeds');
  }

  return totalInventory;
}

function addProduct(productName, price, quantity) {
  const checkCap = checkInventoryCapacity();
  
  if (price <= 0) {
    console.log('Price cannot be negative.');
    return;
  }
  if (quantity <= 0) {
    console.log('Quantity cannot be negative.');
    return;
  }

  if (Number(checkCap) + Number(quantity) > storeCapacity) 
  // checking the storage of inventory
  {
    console.log('Store is at full capacity, cannot add new products.');
    return;
  }
  
  products.push({ 
    name: productName, 
    price: price, 
    quantity: quantity 
  });

}

function removeProduct(productName, quantity) {
  
  if (quantity <= 0) {
    console.log('Quantity must be greater than zero.');
    return;
  }

  const productIndex = products.find((indexProduct) => {
    return indexProduct.name === productName;
  });

  if (!productIndex) {
    console.log(`Product "${productName}" not found.`);
    return;
  }

  const newQuantity = productIndex.quantity - quantity;
  
  if (newQuantity < 0) {
    console.log('Item quantity should not be negative');
    restockProduct(productName, quantity); 
    // Product Removal Edge Cases if user input negative quantity
  } else {
    productIndex.quantity = newQuantity;
    console.log(`Updated ${productIndex.name} Quantity: ${productIndex.quantity}`);
    // initialize new value and console log message
  }
}
// Nintendo Switch
function getMostExpensiveProduct() {
  let mostExpensive = products[0];

  products.forEach((indexProduct) => {
    if (indexProduct.price > mostExpensive.price) {
      mostExpensive = indexProduct;
    }
  });

  const stringResult = `${mostExpensive.name}: ${mostExpensive.price}`;
  return stringResult;
}

function calculateTotalInventoryValue() {
  
  const totalValue = products.reduce((currentVal, indexProduct) => {
    return currentVal + indexProduct.price * indexProduct.quantity;
  }, 0);

  return totalValue;
}

function restockProduct(productName, threshold) {
  products.forEach((indexProduct) => {
    if (indexProduct.name === productName && indexProduct.quantity <= threshold) {
      indexProduct.quantity += 20;
    }
  });

  console.log(products);
}


const newProduct = prompt("Input New Product Name!");
const newPrice = prompt("Input the price");
const newQuantity = prompt("Input the quantity");
addProduct(newProduct, newPrice, newQuantity);

const remProduct = prompt('Would you like to remove a product?');

if (remProduct.toLowerCase() === 'yes') {
  const remProduct = prompt("Input product to remove");
  const removeQuantity = prompt("How many to be remove");

  removeProduct(remProduct, removeQuantity);
}

console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);
console.log(`Total Number of Products: ${checkInventoryCapacity()}`);
console.log(`Total Inventory Value: ${calculateTotalInventoryValue()}`);
console.log(`Most Expensive Product: ${getMostExpensiveProduct()}`);
addProduct('PS5', 24999, 999);
removeProduct('Nintendo Switch', 5);
restockProduct('Nintendo Switch', 10);