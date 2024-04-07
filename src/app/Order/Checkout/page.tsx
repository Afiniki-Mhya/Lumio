import React from 'react';

interface ProductVariant {
  color: string;
  quantity: number;
}

interface Product {
  name: string;
  price: number;
  variants: ProductVariant[];
}

const CheckoutPage: React.FC = () => {
  const product: Product = {
    name: 'Product Name',
    price: 29.99,
    variants: [
      { color: 'Red', quantity: 2 },
      { color: 'Blue', quantity: 1 },
      { color: 'Green', quantity: 3 },
    ],
  };

  const totalQuantity = product.variants.reduce((total, variant) => total + variant.quantity, 0);
  const totalPrice = product.price * totalQuantity;

  return (
    <div className="flex justify-center items-center  ">
      <div className=" p-10 rounded-lg shadow-lg bg-[#ecebe4]">
        
        <div className="border-b border-gray-300 pb-4 mb-4">
          <div className="flex items-center mb-2">
            <span className="font-bold mr-2">Product:</span>
            <span>{product.name}</span>
          </div>
          <div>
            <span className="font-bold">Variants:</span>
            {product.variants.map((variant, index) => (
              <div key={index} className="flex items-center ml-4">
                <span className="inline-block w-4 h-4 rounded-full mx-1" style={{ backgroundColor: variant.color }}></span>
                <span>{variant.color}</span>
                <span className="ml-2">Quantity: {variant.quantity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="font-bold">Total:</span>
            <span className="ml-2">${totalPrice.toFixed(2)}</span>
          </div>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Proceed to Checkout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;