import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Categoria from './Components/ItemListContainer/Categoria';


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
      <Categoria/>
    </Route>
    <Route path="/item/:itemId"> 
      <ItemDetailContainer/>
    </Route>
    <Route exact path="/preguntasfrecuentes">  
    </Route>
    <Route exact path="/contacto">  
    </Route>
  </Switch>

</BrowserRouter>
  </>
  );
}

export default App;
