import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import Detail from './pages/Detail';




const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;