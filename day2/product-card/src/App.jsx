
import ProductCard from './component/./ProductCard';

function App() {
  const products = [
    {
      name: "Bouquet",
      price: 50000,
      image: 'https://images.unsplash.com/photo-1622658641558-235f26dd270b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      inStock: false,
    },

    {
      name: 'Macbook Pro',
      price: 2000000,
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      inStock: true,
    },

    {
      name: 'Anti-blue ray eyeglasses',
      price: 4000,
      image: 'https://images.unsplash.com/photo-1648688135643-2716ec8f4b24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
      inStock: true,
    }
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default App;
