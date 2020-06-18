import React, { lazy } from "react";
import { GlobalStyles } from "./global.styles";
import { Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.util.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions.js";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";
import { Suspense } from "react";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/home/homepage.component.jsx"));
const ShopPage = lazy(() => import("./pages/shop/shop.component.jsx"));
const CheckoutPage = lazy(() =>
  import("./pages/checkout/checkout.component.jsx")
);
const SignInAndSignUp = lazy(() =>
  import("./pages/signin-and-sign-up/signin-and-sign-up.component.jsx")
);

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/shop" component={ShopPage} />
          </Suspense>
        </ErrorBoundary>
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
