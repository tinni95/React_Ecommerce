import React from 'react';
import HomePage from "./pages/home/homepage.component.jsx"
import "./App.css"
import { Route, Redirect } from "react-router-dom";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/signin-and-sign-up/signin-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.util.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js';
import ItemPage from './pages/single-item/itempage.component.jsx';

class App extends React.Component {

  unsubscribeFromAuth= null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
      setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        })
        
      })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return  (
      <div className='App'>
        <Header/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/signin" render={ ()=> 
        this.props.currentUser ? 
        <Redirect to="/"/>:<SignInAndSignUp/>}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route path="/shop/:itemId" component={ItemPage}/>
    </div>)
  }
}

const mapStateToProps= ({user}) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
