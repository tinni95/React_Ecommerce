import React from 'react';
import HomePage from "./pages/home/homepage.component.jsx"
import "./App.css"
import { Route } from "react-router-dom";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/signin-and-sign-up/signin-and-sign-up.component.jsx';
import { auth } from './firebase/firebase.util.js';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth= null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return  (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/signIn" component={SignInAndSignUp}/>
        <Route exact path="/shop" component={ShopPage}/>
    </div>)
  }
}

export default App;
