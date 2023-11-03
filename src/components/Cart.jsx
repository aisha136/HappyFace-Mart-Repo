import React from "react";
import Item from "./Item.jsx";




export default function Cart({ items }) {
  
  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.dollarPrice + (item.centPrice / 100), 0);
  };

  const displayItems = () => {
    return items.map((item) => (
      <Item
        key={item.id}
        title={item.title}
        dollarPrice={item.dollarPrice}
        centPrice={item.centPrice}
      />
    ));
  };

  return (
    <div className="CartDiv">
      <div className="CartDiv--Inside">
        <div className="CartDiv--Inside--CALC">
          <div className="CartDiv--Inside--CALC--TopText">Items Added to Cart:</div>
          <div className="CartDiv--Inside--CALC--MiddleDiv">{displayItems()}</div>
          <div className="CartDiv--Inside--CALC--BottomText">
            <p>Cart Total:</p>
            <p>$ {calculateTotal().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
