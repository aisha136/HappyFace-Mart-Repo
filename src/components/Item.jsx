import React from "react"


//the destructuring here is just props.
export default function Item({ title, dollarPrice, centPrice}) {
  return (
    <div className="CartDiv--Inside--CALC--MiddleDiv--Item">
      <img 
        src="../images/DeleteIcon.svg"
        className="CartDiv--Inside--CALC--MiddleDiv--Item--Button"
      />
      <p className="CartDiv--Inside--CALC--MiddleDiv--Item--Name">
        {title}
      </p>
      <p  className="CartDiv--Inside--CALC--MiddleDiv--Item--Price">
        {dollarPrice}.{centPrice}
      </p>
    </div>
  )
}
