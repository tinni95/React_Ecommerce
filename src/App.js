import React from 'react';
import HomePage from "./pages/home/homepage.component.jsx"
import "./App.css"
import { Route } from "react-router-dom";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/signin-and-sign-up/signin-and-sign-up.component.jsx';

function App() {
  return  (
  <div className='App'>
    <Header/>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/signIn" component={SignInAndSignUp}/>
    <Route exact path="/shop" component={ShopPage}/>
</div>
)
}

export default App;
