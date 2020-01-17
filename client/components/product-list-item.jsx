import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.showDetails = this.showDetails.bind(this);
    this.showVinyl = this.showVinyl.bind(this);
    this.hideVinyl = this.hideVinyl.bind(this);
  }

  showVinyl() {
    this.setState({ isHovered: true });
  }

  hideVinyl() {
    this.setState({ isHovered: false });
  }

  showDetails() {
    this.props.setView('details', { productId: this.props.product.productId });
  }

  render() {
    const price = `$${(this.props.product.price / 100).toFixed(2)}`;
    const imgPos = this.state.isHovered ? { transform: 'translateX(60px)' } : null;
    return (
      <div className="col-lg-6 col-xl-4">
        <div className="album" >
          <img className="card-img-top vinyl" src="/images/vinyl.png" alt='vinyl' style={imgPos} />
          <img className="card-img-top shadow cover" onClick={this.showDetails} onMouseEnter={this.showVinyl} onMouseLeave={this.hideVinyl} src={this.props.product.albumArt} alt={this.props.product.album} />
          <div className="card-body p-1">
            <strong className="card-title font-weight-bolder">{this.props.product.album}</strong>
            <div className="card-text font-weight-light mt-n1 mb-1">{this.props.product.artist}</div>
            <div className="card-subtitle text-muted">{price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
