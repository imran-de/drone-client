import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/404/PageNotFound';

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
          <Route exact path="/about">
            <Home />
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
