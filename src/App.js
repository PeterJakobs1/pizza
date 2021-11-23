import './App.scss';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import CartPage from './Pages/CartPage';
import ProductPage from './Pages/ProductPage';
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
          <div className="content"></div>
          
            <Switch>
              <Route path="/" exact>
              <LandingPage />
              </Route>

              <Route path="/LandingPage" exact>
              <LandingPage />
              </Route>
              
              <Route path="/CartPage" exact>
              <CartPage />
              </Route>

              <Route path="/ProductPage" exact>
              <ProductPage />
              </Route>
            </Switch>
          
         
      </div>

    </div>
  );
}

export default App;