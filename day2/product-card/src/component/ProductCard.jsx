
import './ProductCard.css';

function ProductCard({ name, price, image, inStock }){
    return(
        <div className="product-card">
            <div className="image">
        <img src={image} alt={name} className="product-image" />
        {!inStock && <div/>}
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">₦{price.toLocaleString()}</p>
      <p className={`stock-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? 'In Stock ' : 'Out of Stock '}
      </p>
    </div>

    )
} 
    
export default ProductCard;
