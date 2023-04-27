import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: false,
    };
    this.addStoreIcons = this.addStoreIcons.bind(this);
  }
  render() {
    return (
      <div
        onMouseEnter={() => {
          this.addStoreIcons();
        }}
        onMouseLeave={() => {
          this.addStoreIcons();
        }}
        className="item__card"
      >
        <div className="item__img">
          <img src={"./img/store/" + this.props.item.image} alt="foto" />
          <GiShoppingCart
            onClick={() => {
              this.props.onAdd(this.props.item);
            }}
            className={`store__cart store__icon ${
              this.state.position && "active"
            }`}
          />
          <AiOutlineHeart
            className={`store__heart store__icon ${
              this.state.position && "active"
            }`}
          />
          <FiSearch
            className={`store__search store__icon ${
              this.state.position && "active"
            }`}
          />
        </div>
        <h5>{this.props.item.name}</h5>
        <b>${this.props.item.price}</b>
      </div>
    );
  }

  addStoreIcons() {
    this.setState({ position: !this.state.position });
  }
}

export default Item;
