import React from "react"

import "./collection-item.styles.scss"
import { withRouter } from "react-router-dom";

const CollectionItem = ({id,name,price,imageUrl,history, match})=> (
    <div className="collection-item" onClick={() => history.push(`${match.url}/${id}`)}>
        <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)

export default withRouter(CollectionItem);