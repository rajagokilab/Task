// ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((prod, index) => (
        <ProductCard
          key={index}
          title={prod.title}
          price={prod.price}
          isAvailable={prod.isAvailable}
          discount={prod.discount}
          image={prod.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
