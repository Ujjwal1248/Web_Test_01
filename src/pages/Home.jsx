import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function Home({ search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-bold">Store</h1>
      <p className="text-center text-gray-500">Buy with web3 wallet!</p>

      <ProductList products={filtered} />
    </div>
  );
}
