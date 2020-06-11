import React from "react";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import ItempageComponent from "../single-item/itempage.component";
import { ShopPageContainer } from "./shop.style";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ItempageComponentWithSpinner = WithSpinner(ItempageComponent);

class ShopPage extends React.Component {
  state = { loading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner {...props} isLoading={loading} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={(props) => (
            <CollectionPageWithSpinner {...props} isLoading={loading} />
          )}
        />
        <Route
          exact
          path={`${match.path}/single/:itemId`}
          component={(props) => (
            <ItempageComponentWithSpinner {...props} isLoading={loading} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, MapDispatchToProps)(ShopPage);
