import React from 'react';
import HomePage from "./pages/homepage.component.jsx"
import "./App.css"
import { Route } from "react-router-dom";

const ShopPage = () => (
  <div>
    <h1>Shop Page</h1>
  </div>
)

function App() {
  return  <div className='App'>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/shop" component={ShopPage}/>
</div>
}

export default App;
