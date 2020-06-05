import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview></CollectionsOverview>
  </div>
);

export default ShopPage;
