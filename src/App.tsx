import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './layout/Header';
import Showcase from './layout/Showcase';
import Products from './layout/Products';
import CartState from './context/Cart/CartState';
import Cart from './layout/Cart';

function App() {
  return (
    <CartState>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartState>
  );
}

function Home() {
  return (
    <>
      <Showcase />
      <Products />
    </>
  );
}

export default App;
