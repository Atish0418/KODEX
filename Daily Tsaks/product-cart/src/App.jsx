import ProductCard from "./components/ProductCard";

function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1999",
      category: "Electronics",
      image: "https://avstore.in/cdn/shop/files/1.AVStore-Sonos-Ace-Front-Angled-View-Hero-Black.jpg?v=1725620870"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2999",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1635328947544-a0c0961facc9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "₹2499",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }
  ];

  return (
    <div className="app">
      <h1 className="title">Our Products</h1>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default App;