import React from "react"

export default function ViewedArea({ title, imagePath}) {
  return (
    <div className="Card">
      <div className="Card--imageArea">
        <img className="Card--imageArea--image" src={imagePath}/>
      </div>
      <p className="Card--title">{title}</p>
    </div>
  )
}