import React from "react";
import HomePage from "./pages/home/homepage.component.jsx";
import { GlobalStyles } from "./global.styles";
import { Route, Redirect } from "react-router-dom";

import CheckoutPage from "./pages/checkout/checkout.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/signin-and-sign-up/signin-and-sign-up.component.jsx";

import {
  auth,
  createUserProfileDocument,
  addCollectionsAndDocuments,
} from "./firebase/firebase.util.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions.js";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import SHOP_DATA from "./dummy.js";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collections } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <GlobalStyles />
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/shop" component={ShopPage} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
