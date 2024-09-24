import Link from 'next/link';

export default function productList() {
    const productId = 100;
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Product List</h1>
            <h2><Link href="product/1">Product 1</Link>product 1</h2>
            <h2><Link href="product/2">Product 2</Link>product 2</h2>
            <h2><Link href="product/3">Product 3</Link>product 3</h2>
            <h2><Link href={`products/${productId}`}>Product{productId}</Link></h2>
        </>
    );
}