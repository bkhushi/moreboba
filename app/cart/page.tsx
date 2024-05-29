'use client'
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="mx-auto mt-24 max-w-md p-4 border border-gray-300 rounded-lg">
      <h1 className="font-semibold text-2xl mb-4">Your Cart</h1>
      {cart.length === 0 && <p className="text-red-500 mb-4">No items in the cart</p>}
      {cart.length > 0 && (
        <>
          <ul>
            {cart.map(product => (
              <li key={product.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>{product.name} - ${product.price}</span>
                <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mt-8">Total Price: ${totalPrice}</h2>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
