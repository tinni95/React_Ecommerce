import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import {
  CollectionItemContainer,
  CollectionItemName,
  CollectionItemPrice,
  CollectionItemImage,
  CollectionItemFooter,
} from "./collection-item.style";

const CollectionItem = ({ id, name, price, gallery, history, match }) => {
  const [hover, setHover] = useState(false);

  return (
    <CollectionItemContainer
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() =>
        history.push(
          `${
            match.url.split("/")[0] + "/" + match.url.split("/")[1]
          }/single/${id}`
        )
      }
    >
      <CollectionItemImage
        style={{
          backgroundImage: `url(${hover ? gallery[1] : gallery[0]})`,
        }}
      />
      <CollectionItemFooter>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionItemFooter>
    </CollectionItemContainer>
  );
};

export default withRouter(CollectionItem);
