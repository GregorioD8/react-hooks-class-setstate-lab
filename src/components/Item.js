import React from "react";

// ({ name, category }) 
class Item extends React.Component {

  //initialize state as an object
  state = {
    isInCart: false
  }

  handleAddToCartClick = () => {
    this.setState((prevState) => {
    return  {isInCart: !prevState.isInCart,}
  })
  }

  render() {
  return (
    <li className={this.state.isInCart ? "in-cart" : ""}>
      <span>{this.props.name}</span>
      <span className="category">{this.props.category}</span>
      <button
        className={this.state.isInCart ? "remove" : "add"}
        onClick={this.handleAddToCartClick}
      >
        {this.state.isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}
}

export default Item;
