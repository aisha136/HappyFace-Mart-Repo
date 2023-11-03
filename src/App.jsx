import React from "react";
import "./App.css";
//components
import Header from "./components/Header.jsx";
import ShoppingSection from "./components/ShoppingSection.jsx";
import Card from "./components/Card.jsx";
import Cart from "./components/Cart.jsx";
import Marquee from "./components/Marquee.jsx";
import ViewedArea from "./components/ViewedArea.jsx";
import CanvasSection from "./components/CanvasSection.jsx";
//data
import viewedProductsData from "./viewedProductsData.js";
import data from "./data.js";





export default function App() {
  
  const [cartItems, setCartItems] = React.useState([]);

  const addItem = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const cards = data.map((item) => (
    <Card
      key={item.key}
      title={item.title}
      dollarPrice={item.dollarPrice}
      centPrice={item.centPrice}
      shadowColor={item.shadowColor}
      imagePath={item.imagePath}
      addItem={() => addItem(item)}
    />
  ));

  const productCards = viewedProductsData.map((item) => (
    <ViewedArea
      key={item.key}
      title={item.title}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <Header />
      <Marquee />
      <div className="canvasDiv">
        <CanvasSection className="canvasSection" />
      </div>
      <Marquee />
      <div className="focusArea">
        <ShoppingSection />
        <div className="SS--D2">
          {cards}
        </div> 
      </div>
      <div className="cartArea">
        <div className="cartLeftDiv">
          <div className="cartLeftDiv--title">
            Customers also viewed:
          </div>
          <div className="cartLeftDiv--grid">
            {productCards}
          </div>
        </div>
        <Cart 
          items={cartItems}
        />
      </div>
    </>
  )
}

