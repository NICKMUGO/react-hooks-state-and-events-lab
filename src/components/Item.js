import React, {useState} from "react";

function Item({ name, category }) {
  const [ onCart , AddOnCart]=useState(false)
  function handleClick(){
     AddOnCart(!onCart)
  }
  const itemClass= onCart ? "in-cart" : ""
  const btnDisplay= onCart ?  "Remove From Cart" :"Add to Cart"  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{btnDisplay}</button>
    </li>
  );
}
export default Item