function display_products(products){
    // [ {},{} ]
    let result
    for(let i=0; i<products.length; i++){
        result = display_price(products[i])
       
    }
     return result
}

function display_price(product){
    // {}
    let expensive_product;
    if(product.price > 1000){
        console.log(product.price)
        expensive_product = product.price
        return expensive_product
    }
}
// input
const products = [
    {name: "Phone", price: 500},
    {name: "Laptop", price: 1500}
]
console.log(display_products(products))
 

