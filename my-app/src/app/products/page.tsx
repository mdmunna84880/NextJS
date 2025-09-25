import Link from "next/link";

function Page() {
    const products = [{id: 1, name: 'Mobile', price: 999}, {id: 2, name: 'Laptop', price: 2999}, {id: 3, name: 'Car', price: 10000}];
    return ( 
        <div>
            <h1>Products Page</h1>
            {
                products.map(product => (
                    <div key={product.id} className="border p-2 m-2">
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <Link href={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))
            }
        </div>
     );
}

export default Page;