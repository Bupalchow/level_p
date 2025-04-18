import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SimpleFooter from './components/SimpleFooter';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PortfolioGrid from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppFloat from './components/WhatsAppFloat';

const theme = {
  primary: '#ff6b35', 
  background: '#ffffff',
  text: '#333333',
  gray: '#f7f7f7'
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      
      <div className={`flex flex-col bg-white text-[#333333] font-sans m-0 p-0 ${isHomePage ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
        <Navbar />
        <main className={`flex-1 ${isHomePage ? 'pt-[45px] pb-1 overflow-hidden' : 'pt-[54px]'} w-full box-border`}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<PortfolioGrid />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        {isHomePage ? <SimpleFooter /> : <Footer />}
       <WhatsAppFloat />
      </div>
    </>
  );
}

export default App;