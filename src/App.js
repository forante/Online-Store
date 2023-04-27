import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        { id: 1, image: "image1.png", name: "Barberton Daisy", price: 119.0 },
        {
          id: 2,
          image: "image2.png",
          name: "Angel Wing Begonia",
          price: 169.0,
        },
        { id: 3, image: "image3.png", name: "African Violet", price: 199.0 },
        { id: 4, image: "image4.png", name: "Beach Spider Lily", price: 129.0 },
        {
          id: 5,
          image: "image5.png",
          name: "Blushing Bromeliad",
          price: 139.0,
        },
        { id: 6, image: "image6.png", name: "Aluminum Plant", price: 179.0 },
        { id: 7, image: "image7.png", name: "Bird's Nest Fern", price: 79.0 },
        {
          id: 8,
          image: "image8.png",
          name: "Broadleaf Lady Palm",
          price: 59.0,
        },
        { id: 9, image: "image9.png", name: "Chinese Evergreen", price: 39.0 },
      ],
    };

    this.addToOrders = this.addToOrders.bind(this);
    this.deleteFromOrder = this.deleteFromOrder.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteFromOrder} />
        <Main items={this.state.items} onAdd={this.addToOrders} />
        <Footer />
      </div>
    );
  }

  addToOrders(item) {
    this.setState({ orders: [...this.state.orders, item] });
  }

  deleteFromOrder(item) {
    this.setState({
      orders: this.state.orders.filter((elem) => elem.id !== item.id),
    });
  }
}

export default App;
