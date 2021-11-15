import './App.scss';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';

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

    </div>
  );
}

export default App;
