import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Basket from './Components/Basket';
import UserProfile from './Components/UserProfile';
import Nav from './Components/Nav'
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState('');
  const [blacklist, setBlacklist] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home items={items} setItems={setItems} />
          </Route>
          <Route exact path='/profile'>
            <UserProfile />
          </Route>
          <Route exact path='/profile/:username'>
            <UserProfile />
          </Route>
          <Route exact path='/profile/:username/basket'>
            <Basket />
          </Route>
          <Route>
            <p>404: Page not found</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
