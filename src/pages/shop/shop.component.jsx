import React from "react";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionPage from "../collection/collection.component";
import ItempageComponent from "../single-item/itempage.component";
import { ShopPageContainer } from "./shop.style";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ItempageComponentWithSpinner = WithSpinner(ItempageComponent);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner {...props} isLoading={isFetching} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={(props) => (
            <CollectionPageWithSpinner {...props} isLoading={isFetching} />
          )}
        />
        <Route
          exact
          path={`${match.path}/single/:itemId`}
          component={(props) => (
            <ItempageComponentWithSpinner {...props} isLoading={isFetching} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const MapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
});
const MapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(MapStateToProps, MapDispatchToProps)(ShopPage);
