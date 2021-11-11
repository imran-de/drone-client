import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Purchase from './pages/Purchase/Purchase/Purchase';
import Shop from './pages/Shop/Shop/Shop';
import SignIn from './pages/Login/SignIn/SignIn';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>



            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
