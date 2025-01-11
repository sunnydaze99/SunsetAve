import React from 'react';
import ProductGrid from '../components/ProductGrid';
import '../styles/main.scss';


function New() {
  // Temporary placeholder products
  const placeholderProducts = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: 'Coming Soon',
    price: 'TBA',
    image: '' // Leave empty for now
  }));

  return (
    <section className="new-page">

      <section className="new-page-banner">
        <section className="new-page-banner-content">
          <h2>New Arrivals</h2>
        </section>
      </section>
      <section className="join-newsletter">
        <p>Be the first to know when new styles drop by signing up for our newsletter below</p>
        {/* <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">SIGN UP</button>
        </form> */}
      </section>

      <ProductGrid products={placeholderProducts} />

    </section>
  );
}

export default New;
