import productData from "../data/products.json";
import ProductCardList from "../components/ProductCardList";

export default function Example() {
  return (
    <div>
      <h1>Users Page</h1>
      <ProductCardList products={productData} />
    </div>
  );
}
