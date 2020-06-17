import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import "./itempage.styles.scss";
import { withRouter } from "react-router-dom";
import { SHOP_DATA_FLAT } from "../../dummy";
import ItemGallery from "../../components/single-item-gallery/single-item-gallery.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { TextBlockContainer, Price } from "./itempage.style";

class ItemPage extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    this.setState(
      {
        item: SHOP_DATA_FLAT.find((el) => el.id === parseInt(itemId)),
      },
      () => this.setState({ loading: false })
    );
  }

  render() {
    if (this.state.loading) return null;
    return (
      <div className="item-page">
        <ItemGallery gallery={this.state.item.gallery} />
        <TextBlockContainer>
          <h1>{this.state.item.name}</h1>
          <Price>{this.state.item.price}</Price>
          <div className={"spacer"}>
            <CustomButton
              onClick={() => this.props.addItem(this.state.item)}
              inverted
            >
              ADD TO CART
            </CustomButton>
          </div>
        </TextBlockContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(ItemPage));
