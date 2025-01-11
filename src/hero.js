import React,  { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';
import './styles/main.scss';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { id: 1, name: 'Product 1', price: '$0.00', color: '#8C8' },
        { id: 2, name: 'Product 2', price: '$0.00', color: '#88C' },
        { id: 3, name: 'Product 3', price: '$0.00', color: '#C88' },
    ];

    useEffect(() => {
        const handleScroll = () => {
        const section = document.querySelector('.best-sellers');
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
            setIsVisible(true);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    };

  return (
    <>
    <section className="hero">
        <div className="hero-content">
        
            <div className="hero-text">
                <h1>Flowy</h1>
                <div className="heading-group">
                    <h2>Vibrant</h2>
                    <span><h1>Beautiful</h1></span>
                </div>          
                <p>Is this your vibe?</p>
                <Link to="/shop" className="shop-now-button"> SHOP  NOW </Link>
            </div>
            <div className="hero-image">
                <img src="/images/sunsetave_collage.jpg" alt="Fashion Highlight" />
                <div className="sparkles"></div> 
            </div>
        </div>
    </section>
    <div>
    </div>
    <section className="banner">
        <div className="banner-content">
            <h2>Bringing Your Aesthetic To You</h2>
            <p>From breezy everyday looks to elegant evening wear,</p>
            <p>we're here to help you embody timeless styles for every occasion!!</p>

        </div>
    </section>
    <section className="best-sellers">
        <div className="best-sellers-container">
            {/* Left Column: Best Seller Showcase */}
            <div className="best-sellers-showcase">
                <h2>Best Sellers</h2>
                <div className="slideshow">
                    <button className="prev" onClick={prevSlide}>&#8592;</button>
                    <div className="slide">
                        <div className="product-image-placeholder">
                            <img src="/images/sunsetave_collage.jpg" alt="Inspiration 1" />
                            <div className="overlay-message">Stay tuned for exciting new arrivals</div>
                        </div>
                        {/* <h3>{products[currentIndex].name}</h3>
                            <p>{products[currentIndex].price}</p> */}
                        <span className="coming-soon">Coming Soon</span>
                    </div>
                    <button className="next" onClick={nextSlide}>&#8594;</button>
                </div>
            </div>

            {/* Right Column: Pinterest Collage */}
            <div className="pinterest-collage">
            <h2>Mood Boards</h2>
            <p>Explore our boards that capture the essence of SunsetAve. Each is a glimpse into the styles and colors that inspire us</p>
            <div className="collage-grid">
                <div className="tile"><img src="/images/sunsetave_collage.jpg" alt="Inspiration 1" /></div>
                <div className="tile"><img src="/images/red_collage.jpg" alt="Inspiration 2" /></div>
                <div className="tile"><img src="/images/orange_collage_2.jpg" alt="Inspiration 3" /></div>
                <div className="tile"><img src="/images/orange_collage_1.jpg" alt="Inspiration 4" /></div>
            </div>
            <button className="pinterest-button">View on Pinterest</button>
            </div>
        </div>
        </section>    
    </>
  );
}

export default Hero;
