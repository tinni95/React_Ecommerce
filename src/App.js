import React from 'react';
import HomePage from "./pages/home/homepage.component.jsx"
import "./App.css"
import { Route } from "react-router-dom";
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return  <div className='App'>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/shop" component={ShopPage}/>
</div>
}

export default App;
