import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Product from './Component/Product/Product';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Header from './Global/Header';
import Footer from './Global/Footer';
import Vegetables from "./Popularproduct/Vegetables";
import Fruitsdryfruits from "./Popularproduct/Fruitsdryfruits";
import Spices from "./Popularproduct/Spices";
import Herbs from "./Popularproduct/Herbs";

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null; 
}

function MainRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vegetables" element={<><ScrollToTop/><Vegetables /></>} />
                <Route path="/fruits&dryfruits" element={<Fruitsdryfruits />} />
                <Route path="/spices" element={<Spices />} />
                <Route path="/herbs&pulses&coffees" element={<Herbs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default MainRoutes;
