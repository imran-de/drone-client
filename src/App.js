import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Purchase from './pages/Purchase/Purchase/Purchase';
import Shop from './pages/Shop/Shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            {/* <Home /> */}
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/purchase">
            <Purchase />
          </Route>



          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
