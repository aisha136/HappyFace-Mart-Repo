import React from "react";






export default function Card({ title, dollarPrice, centPrice, addItem, itemKey, imagePath, shadowColor }) {

  const cardStyle = {
    boxShadow: `-11px 11px 0px 0px ${shadowColor}`,
  };

  const handleAddToCart = () => {
    if (addItem) {
        addItem({
            id: itemKey,
            title,
            dollarPrice,
            centPrice
        });
    }
  };

  return (
    <div 
      className="SS--D2--Card"
      style={cardStyle}
    >
      <div className="SS--D2--Card--ImgArea">
        <img src={imagePath} className="SS--D2--Card--ImgArea--Img"/>
      </div>
      <p className="SS---D2--Card--Title">
        {title}
      </p>
      <div className="SS--D2--Card--PBDiv">
        <p className="SS--D2--Card--PBDiv--Price">
          &#36;{dollarPrice}.<span className="small--cents">{centPrice}</span>
        </p>
        <button 
            className="SS--D2--Card--PBDiv--Button"
            onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
