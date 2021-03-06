
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './component/navBar';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/itemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContextProvider from './context/CartContext';





function App() {
  return (
    <>
    <BrowserRouter>
    
      <ContextProvider> 
        <NavbarComponent/>

        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          
        </Switch>
        </ContextProvider>
        <div>
          <h1> Acá va a ir el footer! </h1>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
