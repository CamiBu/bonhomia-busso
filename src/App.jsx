
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavbarComponent from './component/navBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
  return (
    <>
    <NavbarComponent/> 
    <br/>
    <ItemListContainer greeting="hola tienda"/>
    </>  
  );
}

export default App;
