import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import header_logo from '../assets/images/main-logo.png'
function Header() {

    const [isSticky, setSticky] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setSticky(scrollY >= 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        

            {/* =======menu======== */}
            <header className={`header ${isSticky ? 'sticky' : ''}`}>
                <div class="nav-wrapper">
                    <div class="logo-container">
                       <Link to="/"> <img class="logo" src={header_logo} alt="Logo"/></Link>
                    </div>
                    <nav>
                        <input class="hidden" type="checkbox" id="menuToggle"/>
                            <label class="menu-btn" for="menuToggle">
                                <div class="menu"></div>
                                <div class="menu"></div>
                                <div class="menu"></div>
                            </label>
                            <div class="nav-container">
                                <ul class="nav-tabs">
                                    <li class="nav-tab"><Link to="/">Home</Link></li>
                                    <li class="nav-tab"><Link to="/products">Products</Link></li>
                                    <li class="nav-tab"><Link to="/about">About Us</Link></li>
                                    <li class="nav-tab"><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header