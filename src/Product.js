/* eslint react/style-prop-object: 0 */
import React, { Component } from "react";
import PropTypes from "prop-types";
// Import React-Intl


import Button from "./Button";
import "./Product.css";

// Define translations for aria-label text


class Product extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${this.props.image})`
    }

    let basketButton;

    if(this.props.inBasket) {
      /* Provide aria-label for the button's function */
      basketButton = (
        <Button
          onClick={this.props.removeFromBasket}
          >
            {/* Translate button text */}
        </Button>
      );
    } else {
      /* Provide aria-label for the button's function */
      basketButton = (
        <Button
          type="primary"
          onClick={this.props.addToBasket}
          >
          {/* Translate button text */}
        </Button>
      );
    }

    return (
        <section className="Product">
            <div className="Product_image" style={styles}></div>
            <div className="Product_info">
              <h2>{this.props.name}</h2>
              <p>{this.props.description}</p>
              <div className="date">
                {/* Localise date format */}
              </div>
              <span className="price">
                {/* Localise price format */}
              </span>

              <div className="Product_actions">
                { basketButton }
              </div>
            </div>
        </section>
    );
  }
}

Product.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  addToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  inBasket: PropTypes.bool
}

Product.defaultProps = {
  name: undefined,
  description: undefined,
  date: new Date(),
  price: 0,
  inBasket: false,
}

export default Product;