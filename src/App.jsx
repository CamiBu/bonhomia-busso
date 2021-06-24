
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavbarComponent from './component/navBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/itemDetailContainer';


function App() {
  return (
    <>
    <NavbarComponent/> 
    <br/>
   { /* <ItemListContainer greeting="hola tienda"/> */ }
    <hr/>
    <ItemDetailContainer greeting="detalle"/>
    </>  
  );
}

export default App;
