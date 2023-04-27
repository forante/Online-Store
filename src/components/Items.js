import React from "react";
import Item from "./Item";

class Items extends React.Component {
  render() {
    return (
      <div className="item__cards">
        {this.props.items.map((elem) => {
          return <Item item={elem} key={elem.id} onAdd={this.props.onAdd} />;
        })}
      </div>
    );
  }
}

export default Items;
