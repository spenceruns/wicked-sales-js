import React from 'react';
import VinylDetails from './vinyl-details';
import AccessoryDetails from './accessory-details';
import TurntableDetails from './turntable-details';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.checkForProductDetails = this.checkForProductDetails.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.productId}`)
      .then(result => result.json())
      .then(data => this.setState({ product: data }));
  }

  checkForProductDetails() {
    if (this.state.product) {
      switch (this.state.product.category) {
        case 'vinyl':
          return <VinylDetails product={this.state.product} setView={this.props.setView} addToCart={this.props.addToCart} />;
        case 'turntable':
          return <TurntableDetails product={this.state.product} setView={this.props.setView} addToCart={this.props.addToCart} />;
        case 'accessories':
          return <AccessoryDetails product={this.state.product} setView={this.props.setView} addToCart={this.props.addToCart} />;
        default:
          return null;
      }
    }
  }

  render() {
    return (
      <div className="col-12">
        { this.checkForProductDetails() }
      </div>
    );
  }
}

export default ProductDetails;
