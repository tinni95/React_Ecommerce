import React, { useEffect, lazy } from "react";
import { Route } from "react-router-dom";
import { ShopPageContainer } from "./shop.style";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { Suspense } from "react";
import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collection-overview.container")
);

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ItempageContainer = lazy(() =>
  import("../single-item/itempage.container")
);

const ShopPage = ({ fetchCollectionStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, []);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </ShopPageContainer>
  );
};

const MapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, MapDispatchToProps)(ShopPage);
