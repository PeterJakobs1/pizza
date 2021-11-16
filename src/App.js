import './App.scss';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
<<<<<<< HEAD
import ProductPage from './Pages/ProductPage';
import {Switch, Route} from 'react-router-dom';
=======
import CartPage from './Pages/CartPage';

>>>>>>> 9ea32332e15f53990e4f84a9fc5972895792aa77

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
          <div className="content">
            <LandingPage />
          </div>
      </div>
<<<<<<< HEAD
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path ="/" exact >
                <ProductPage />
                </Route>
                <Route path ="/ProductPage" exact >
                <ProductPage />
                </Route>
            </Switch>
          </div>
=======
      <div>
      <CartPage/>
>>>>>>> 9ea32332e15f53990e4f84a9fc5972895792aa77
      </div>

    </div>
  );
}

export default App;
