import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../store/actions/productsActions";

interface myProps {
  products: any;
  getProducts: any;
}

class products extends Component<myProps> {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;
    console.log(products);

    if (products.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {products.results.map(
            (p: {
              id: React.Key | null | undefined;
              name: string;
              price: number;
            }) => (
              <div key={p.id} className="Product">
                <h3>{p.name}</h3>
                <h4>{p.price} kr</h4>
              </div>
            )
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = (state: { products: any }) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(products);
