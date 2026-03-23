const products = ["laptop", "Phone", "Headphones",  "Monitor"];

function logFirstProduct(product_details){
  console.log(product_details)
}
const product_details = "New from UK";
logFirstProduct(product_details)

function updateProductName(position, newName){
  products [position] = newName
}
updateProductName(2,"XenonCamera")
console.log(products)

function removeLastProduct(products){
  products.pop()
  console.log(products)
}

removeLastProduct(products)
console.log(products)
