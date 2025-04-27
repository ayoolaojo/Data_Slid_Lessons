const Products = [
    {
    Id:1,
    name:"Samsung s23",
    description: "This is a Samsung s23 product, reliable",
    price:40,
    img:"./phone.jpg",
    isActive:true
},


{
    Id:2,
    name:"Iphone 14",
    description: "Product 2 description",
    price:50,
    img:"./phone.jpg",
    isActive:true
},
]


 const productList = document.getElementById("section")

 const renderProducts = () => {
    const product = productList.content.cloneNode(true)
 }