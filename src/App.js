import logo from './logo.svg';
import './App.css';
import Home from './components/page/home.tsx'
import MyNavbar from './components/Navbar.js'

function App() {
  return (
      <div className="App">
        <MyNavbar />
        <header>
          <Home />
        </header>
      </div>
  );
}

export default App;
