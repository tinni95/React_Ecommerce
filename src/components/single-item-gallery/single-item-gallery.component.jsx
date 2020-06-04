import React from "react";

import "./single-item-gallery.styles.scss"
import GalleryImage from "../single-item-gallery-image/single-item-gallery-image.component";

const ItemGallery = ({gallery}) => (
    <div className="single-item-gallery">
    { gallery.map((img,idx) => <GalleryImage key={idx} imageUrl={img}></GalleryImage>) }
    </div>
)

export default ItemGallery;