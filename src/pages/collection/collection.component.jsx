import React from "react";

import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection: { title, items } }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} id={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
