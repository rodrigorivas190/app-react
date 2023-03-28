import'./App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <ItemListContainer greeting={"Bienvenidos a Lea Librerias!"}/>
    </div>
  
  );
}

export default App;
