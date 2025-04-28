const base_url = "https://fakestoreapi.com/"
const Products = []

const getProductsAwait = async() => {
    try{
    const response = await fetch(`${base_url} products`)
    if (!response.ok){
        throw new Error()
    }
    const data = await response.json()
    console.log(data, "data await")
    Products.push(...data)

    } catch (error) {
        console.log("Error:" , error);
    }
}


const getProductsThen =() => {
    fetch(`${base_url} products`)
    .then((response))

}