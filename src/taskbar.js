import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './Assets/icons8-search.svg';
import ReviewIcon from './Assets/icons8-review-33.png';
import './styles/main.scss';


function Taskbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Adjust the threshold as needed
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Remove focus/highlight from links
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                link.blur(); // Removes focus from the link after clicking        
            });
        });
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            links.forEach(link => {
                link.removeEventListener('click', () => {
                    link.blur();
                });
            });
        };
    }, []);
    return (
        <header className={`taskbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo on the left */}
        <div className="logo-container">
            {!scrolled ? (
                <Link to="/">
                    <img src="/logo.png" alt="SunsetAve Logo" className="logo" />
                </Link>
            ) : (
            <Link to="/" className="logo-text">
                <span className="sunset">Sunset</span>
                <span className="ave">A v e.</span>
            </Link>
            )}        
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
            <Link to="/new">NEW</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/dresses">DRESSES</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>

        {/* Icons on the right */}
        <div className="icons">
            <Link to="#search"><img src={SearchIcon} alt="Search Icon" /></Link>
            <Link to="/reviews"><img src={ReviewIcon} alt="Review Icon" /></Link>
           { /*<a href="#account"><i className="fa fa-user"></i></a> */}
        </div>
        </header>
  );
}

export default Taskbar;
