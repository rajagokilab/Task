// ProductCard.jsx
import React from "react";

const ProductCard = ({ title, price, isAvailable, discount, image }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-md w-64 text-center">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {/* Price + Discount */}
      <p className="text-gray-700">
        Price: <span className="font-bold">₹{price}</span>
      </p>
      {discount > 0 && (
        <p className="text-green-600 font-medium">Discount: {discount}%</p>
      )}

      {/* Availability */}
      {isAvailable ? (
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Add to Cart
        </button>
      ) : (
        <p className="text-red-600 font-bold mt-3">Out of Stock</p>
      )}
    </div>
  );
};

// Default Props
ProductCard.defaultProps = {
  discount: 0,
};

export default ProductCard;
