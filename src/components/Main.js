import React from "react";
import Aside from "./Aside";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="main__row">
            <Aside />
            <section className="store">alla</section>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
