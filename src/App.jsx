// App.jsx
import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const products = [
    {
      title: "iPhone 15",
      price: 79999,
      isAvailable: true,
      discount: 10,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15",
    },
    {
      title: "Samsung Galaxy S23",
      price: 74999,
      isAvailable: false,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/galaxy-s23",
    },
    {
      title: "OnePlus 11",
      price: 59999,
      isAvailable: true,
      discount: 5,
      image:
        "https://image01.oneplus.net/ebp/2023/oneplus11.png",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🛒 Product Listings
      </h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
