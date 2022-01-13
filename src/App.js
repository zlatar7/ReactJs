import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  return (
  <>
<NavBar/>
<ItemListContainer greeting = "Este es el item list container" />
  </>
  );
}

export default App;
