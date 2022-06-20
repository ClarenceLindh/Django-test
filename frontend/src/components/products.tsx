import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../store/actions/productsActions";

interface myProps { products: any; getProducts: any; }

class products extends Component<myProps> {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;
    console.log(products);

    return (
      <div>
        {products.map((p: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => 
          <React.Fragment key={p.id}>
            <h1>{p.name}</h1>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: { products: any }) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(products);
