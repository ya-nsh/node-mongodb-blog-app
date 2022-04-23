import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <>
      <Navbar />
      <Register />
    </>
  );
}

export default App;
