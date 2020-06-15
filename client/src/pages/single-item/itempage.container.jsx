import { compose } from "redux";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ItemPage from "./itempage.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const ItemPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ItemPage);

export default ItemPageContainer;
