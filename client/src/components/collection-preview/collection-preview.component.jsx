import React from "react";

import "./collection.preview.style.jsx";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionsPreviewContainer,
  Title,
  Preview,
} from "./collection.preview.style.jsx";

const CollectionPreview = ({ title, items }) => (
  <CollectionsPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <Preview className="preview">
      {items
        .filter((item, idx) => idx < 3)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} id={id} {...otherItemProps} />
        ))}
    </Preview>
  </CollectionsPreviewContainer>
);

export default CollectionPreview;
