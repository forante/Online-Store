import React from "react";
import Items from "./Items";

class Store extends React.Component {
  render() {
    return (
      <section className="store">
        <div className="store__sort">
          <div className="sort__items">
            <div className="sort__item active">All Plants</div>
            <div className="sort__item">New Arrivals</div>
            <div className="sort__item">Sale</div>
          </div>
          <div className="store__items"></div>
          <Items />
        </div>
      </section>
    );
  }
}

export default Store;
