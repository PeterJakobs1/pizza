import './App.scss';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import ProductPage from './Pages/ProductPage';
import {Switch, Route} from 'react-router-dom';

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
      </div>

    </div>
  );
}

export default App;
