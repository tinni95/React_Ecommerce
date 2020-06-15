import React from "react";

import { SingleImage } from "./single-item-gallery-image.style";

const GalleryImage = ({ imageUrl }) => (
  <SingleImage
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  />
);

export default GalleryImage;
