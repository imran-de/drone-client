import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Purchase from './pages/Purchase/Purchase/Purchase';
import Shop from './pages/Shop/Shop/Shop';
import SignIn from './pages/Login/SignIn/SignIn';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Reviews from './pages/Reviews/Reviews';

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
            <Route path="/reviews">
              <Reviews />
            </Route>
            <PrivateRoute path="/purchase/:id/:name">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>



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
