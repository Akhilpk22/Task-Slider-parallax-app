
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Px from './Component/Px';
import Footer from './Pages/Footer';
import Header from './Pages/Header';



function App() {
  return (
    <div className="App">

  <Routes>

    <Route path="/" element={<Header />} />
    <Route path="/parallax-effect" element={<Px />} />

  </Routes>
   
    </div>
  );
}

export default App;
