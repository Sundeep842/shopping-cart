import React, { Component } from "react";
import Currency from "../util";
import "../index.css";
class Product extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </a>
              </div>
              <div className="product-price">
                <div>{Currency(product.price)}</div>
                <button className="button-css">Add To Cart</button>
              </div>
            </li>
          ))}
        </ul>
        hii
      </div>
    );
  }
}

export default Product;
