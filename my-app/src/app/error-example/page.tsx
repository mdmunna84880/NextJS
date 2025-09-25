async function ProductList() {
    async function getData() {
        const isError = Math.random()  < 0.5;

        if(isError){
            throw new Error("The error is occured");
        }

        return [{id: 1, name: "One", price: 599}, {id: 2, name: "Two", price: 59569}, {id: 3, name: "Three", price: 899}];
    }

    const products = await getData();

    return ( 
        <div className="p-4">
            {products.map(product=>(
                <div key={product.id} className="border-2 border-amber-400 rounded-md hover:shadow-[0_0_15px_rgb(155, 233, 201)]">
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
     );
}

export default ProductList;