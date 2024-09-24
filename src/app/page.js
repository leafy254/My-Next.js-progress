import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <Link href="/Blog">Go to Blog</Link> {/* Directly using text as child */}
            <br />
            <Link href="/products">Go to Products</Link> {/* Directly using text as child */}
        </>
    );
}
