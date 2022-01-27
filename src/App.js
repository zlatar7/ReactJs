import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
  <>
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
  </Switch>

</BrowserRouter>
  </>
  );
}

export default App;
