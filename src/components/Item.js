import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="item__card">
        <div className="item__img">
          <img src={"./img/store/" + this.props.item.image} alt="foto" />
        </div>
        <h5>{this.props.item.name}</h5>
        <b>${this.props.item.price}</b>
      </div>
    );
  }
}

export default Item;
