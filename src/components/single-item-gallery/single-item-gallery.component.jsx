import React from "react";

import GalleryImage from "../single-item-gallery-image/single-item-gallery-image.component";
import { SingleItemGallery } from "./single-item.style";

const ItemGallery = ({ gallery }) => (
  <SingleItemGallery>
    {gallery.map((img, idx) => (
      <GalleryImage key={idx} imageUrl={img}></GalleryImage>
    ))}
  </SingleItemGallery>
);

export default ItemGallery;
