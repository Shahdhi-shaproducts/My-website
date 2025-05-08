import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import ShaPhone from './pages/ShaPhone';
import ShaBook from './pages/ShaBook';
import ShaPad from './pages/ShaPad';
import ShaWatch from './pages/ShaWatch';
import Accessories from './pages/Accessories';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/shaphone" element={<ShaPhone />} />
          <Route path="/shabook" element={<ShaBook />} />
          <Route path="/shapad" element={<ShaPad />} />
          <Route path="/shawatch" element={<ShaWatch />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;