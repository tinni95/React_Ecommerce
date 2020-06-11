import React from "react";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import itempageComponent from "../single-item/itempage.component";
import { ShopPageContainer } from "./shop.style";

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:categoryId`}
      component={CollectionPage}
    />
    <Route
      exact
      path={`${match.path}/single/:itemId`}
      component={itempageComponent}
    />
  </ShopPageContainer>
);

export default ShopPage;
