import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/Landing'
import NavigationBar from './components/navigationBar';
import Winners from './pages/Winners';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NomineePage from './pages/NomineePage';
import SOTDPage from './pages/SOTDPage';
import SOTMPage from './pages/SOTMPage';


function App() {
  return (
    <div className='whole-web relative'>
      
      {/* <LandingPage /> */}
      <BrowserRouter className="App controlling-flow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/nominee" element={<NomineePage />} />
          <Route path="/sotd" element={<SOTDPage />} />
          <Route path="/sotm" element={<SOTMPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

        
  );
}

export default App;
