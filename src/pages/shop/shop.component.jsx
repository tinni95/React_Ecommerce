import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import itempageComponent from "../single-item/itempage.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
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
  </div>
);

export default ShopPage;
