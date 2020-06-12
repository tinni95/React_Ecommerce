import React from "react";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import ItempageContainer from "../single-item/itempage.container";
import { ShopPageContainer } from "./shop.style";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
        />
        <Route
          exact
          path={`${match.path}/single/:itemId`}
          component={ItempageContainer}
        />
      </ShopPageContainer>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, MapDispatchToProps)(ShopPage);
