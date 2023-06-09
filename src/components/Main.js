import React from "react";
import Aside from "./Aside";
import Store from "./Store";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="main__row">
            <Aside />
            <section className="store">
              <Store
                items={this.props.items}
                onAdd={this.props.onAdd}
              />
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
