import React from "react";

import "./single-item-gallery-image.styles.scss"

const GalleryImage = ({imageUrl}) => (
    <div className="image"
    style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
)

export default GalleryImage;