import React from "react";
import "../../css/Filter/Filter.css"
export default function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="num-of-products">Number of product</div>
      <div className="filter-by-size">
        <span>filter</span>
        <select className="filter-select">
          <option value={"ALL"}>ALL</option>
          <option value={"XS"}>XS</option>
          <option value={"S"}>S</option>
          <option value={"M"}>M</option>
          <option value={"L"}>L</option>
          <option value={"xL"}>xL</option>
          <option value={"xxL"}>xxL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select">
          <option value={"latest"}>latest</option>
          <option value={"lower"}>lower</option>
          <option value={"heighest"}>heighest</option>
        </select>
      </div>
    </div>
  );
}
