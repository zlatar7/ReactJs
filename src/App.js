import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContext from './Components/Cart/CartContext';

function App() {

  return (
  <>
<CartContext>
  <BrowserRouter>

<NavBar/>

  <Switch>
    <Route exact path="/">  
      <ItemListContainer/>
    </Route>
    <Route path="/categoria/:categoriaId">  
      <ItemListContainer/>
    </Route>
    <Route path="/item/:itemId"> 
      <ItemDetailContainer/>
    </Route>
    <Route path="/Cart"> 
      <Cart/>
    </Route>
    <Route path='/cart'>
      <Cart/>
    </Route>
  </Switch>

</BrowserRouter>
</CartContext>
  </>
  );
}

export default App;
