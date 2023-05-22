
const container = document.querySelector('.container')
async function fetchData(){
   const data = await fetch('https://dummyjson.com/products/')

   const result = await data.json()





const product = document.createElement('div')

console.log(result)

let singleProductFirstChild = ''

for(i=0;i<result.products.length;i++){
    if(i===0){
        singleProductFirstChild='firstChild'
    }else{
        singleProductFirstChild=''
    }
   product.innerHTML += ` 
   <div class='single_product ${singleProductFirstChild}'>
   <div class='discount'>${result.products[i].discountPercentage}% off ! </div>
    <h2> ${result.products[i].title} </h2>
    <div class='img_container'>
    <img src='${result.products[i].thumbnail}' />
    </div>
   <div class='desc_price'> 
   <span class='price'> $${result.products[i].price}</span>
   <p> ${result.products[i].description} </p>
   <h3>Buy</h3>  
    </div>

    </div>`
}



container.appendChild(product)







}



fetchData()