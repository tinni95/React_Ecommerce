import React from "react";

import "./collection-item.styles.scss";
import { withRouter } from "react-router-dom";

class CollectionItem extends React.Component {
  constructor() {
    super();

    this.state = {
      hover: false,
    };
  }

  render() {
    const { id, name, price, gallery, history, match } = this.props;
    return (
      <div
        onMouseOver={() =>
          this.setState({ hover: true }, () => console.log("over"))
        }
        onMouseOut={() =>
          this.setState({ hover: false }, () => console.log("out"))
        }
        className="collection-item"
        onClick={() => history.push(`${match.url}/single/${id}`)}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              this.state.hover ? gallery[1] : gallery[0]
            })`,
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(CollectionItem);
