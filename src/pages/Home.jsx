import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Headphones", price: 999 },
  { id: 2, name: "Phone Case", price: 499 },
  { id: 3, name: "USB Cable", price: 199 },
];

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🛍 Product Store</h1>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;