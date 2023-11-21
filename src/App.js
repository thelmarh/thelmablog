import { Fragment } from "react";
import products from "./products";
import ProductCard from "./component/ProductCard";

function App() {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            productName={product.productName}
            price={product.price}
            description={product.description}
            imagePath={product.URL}
          />
        );
      })}
    </Fragment>
  );
}

export default App;
