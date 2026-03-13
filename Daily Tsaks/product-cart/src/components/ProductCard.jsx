import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p className="category">{product.category}</p>

      <p className="price">{product.price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;