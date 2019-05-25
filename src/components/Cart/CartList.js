import React from "react";
import CartItem from "./CartItem";

export default function CartList({ Value }) {
  const { cart } = Value;
  console.log(Value, cart);
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} Value={Value} />;
      })}
    </div>
  );
}
