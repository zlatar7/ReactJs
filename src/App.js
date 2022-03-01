import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContext from './Components/Cart/CartContext';
import Footer from './Components/Footer/Footer';
import Form from './Components/Formulario/Formulario';
import FAQs from './Components/FAQs/FAQs';

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
    <Route path="/category/:categoriaId">  
      <ItemListContainer/>
    </Route>
    <Route path="/item/:itemId"> 
      <ItemDetailContainer/>
    </Route>
    <Route path="/Cart"> 
      <Cart/>
    </Route>
    <Route exact path="/Formulario"> 
      <Form/>
    </Route>
    <Route exact path="/FAQs"> 
      <FAQs/>
    </Route>
  </Switch>

<Footer/>

</BrowserRouter>
</CartContext>
  </>
  );
}

export default App;
