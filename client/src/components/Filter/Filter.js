import React from "react";
import "../../css/Filter/Filter.css"
export default function Filter(props) {
    console.log (props.size)
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="num-of-products">Number of product 4</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-select" value={props.size} onChange={props.handleFilterBySize}>
          <option value={"ALL"}>ALL</option>
          <option value={"XS"}>XS</option>
          <option value={"S"}>S</option>
          <option value={"M"}>M</option>
          <option value={"L"}>L</option>
          <option value={"XL"}>XL</option>
          <option value={"XXL"}>XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select" value={props.sort} onChange={props.handleFilterByOrder}>
          <option value={"latest"}>latest</option>
          <option value={"lowest"}>lowest</option>
          <option value={"heighest"}>heighest</option>
        </select>
      </div>
    </div>
  );
}
