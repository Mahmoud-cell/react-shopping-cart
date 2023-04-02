import React from "react";
// import { Bounce } from "react-awesome-reveal";
import { connect } from "react-redux";
import { filteredSize, filteredSort } from "../../store/actions/products";
import "../../css/Filter/Filter.css";

const Filter = (props) => {
  return (
    // <Bounce left>
    <>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2 className="filter-title">Filter</h2>
          <div className="num-of-products">
            Number of product {props.filterProducts.length}
          </div>
          <div className="filter-by-size">
            <span>Filter</span>
            <select
              className="filter-select"
              value={props.size}
              onChange={(e) =>
                props.filteredSize(props.products, e.target.value)
              }
            >
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
            <select
              className="filter-select"
              value={props.sort}
              onChange={(e) =>
                props.filteredSort(props.filterProducts, e.target.value)
              }
            >
              <option value={"latest"}>latest</option>
              <option value={"lowest"}>lowest</option>
              <option value={"heighest"}>heighest</option>
            </select>
          </div>
        </div>
      )}
    </>

    // </Bounce>
  );
};

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  {
    filteredSize,
    filteredSort,
  }
)(Filter);
