import React, { Component } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export class Order extends Component {
  render() {
    return (
      <div className="cart__item">
        <div>
          <img src={"./img/store/" + this.props.item.image} alt="foto" />
        </div>
        <h5>{this.props.item.name}</h5>
        <div className="item__quanity__block">
          <AiFillMinusCircle className="item__quanity-icons" />
          <div className="item__quanity">1</div>
          <AiFillPlusCircle className="item__quanity-icons" />
        </div>
        <b>${this.props.item.price}</b>
        <MdDeleteForever
          onClick={() => this.props.onDelete(this.props.item)}
          className="item__delete-icon"
        />
      </div>
    );
  }
}

export default Order;
