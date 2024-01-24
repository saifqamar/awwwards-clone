import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/Landing'
import NavigationBar from './components/navigationBar';

function App() {
  return (
    <div className='whole-web relative'>
      <NavigationBar />
      <LandingPage />
    </div>
    
  );
}

export default App;
