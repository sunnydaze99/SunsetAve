import React, { useState, useEffect } from 'react';
import CancelIcon from '../Assets/icons8-cancel-32.png';
import DropdownIcon from '../Assets/icons8-expand-arrow-32.png';
import '../styles/main.scss';


function ProductGrid({ products }) {

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  //  Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24; // Products per page
  const totalProducts = products.length; // Total number of products
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  //  Handle Page Change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Handle View More Button
  const handleViewMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Disable page scrolling when filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isFilterOpen]);

  // Toggle functions
  const toggleFilterMenu = () => setIsFilterOpen(!isFilterOpen);
  const toggleSortMenu = () => setIsSortOpen(!isSortOpen);

  // Close menus when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.filter-button') && !e.target.closest('.filter-menu')) {
        setIsFilterOpen(false);
      }
      if (!e.target.closest('.sort-button') && !e.target.closest('.sort-menu')) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className='product-container'>

      {/* Toolbar */}
      <div className="toolbar">
        <button className="filter-button" onClick={toggleFilterMenu}>
          FILTER +
        </button>
        <div className="sort-wrapper">
          <button className="sort-button" onClick={toggleSortMenu}>
            SORT
            <img src={DropdownIcon} alt="Dropdown Icon" className="drop-down-icon" />
          </button>

          {/* Sort Menu */}
          {isSortOpen && (
            <div className="sort-menu">
              <ul>
                <li onClick={() => setIsSortOpen(false)}>Newest</li>
                <li onClick={() => setIsSortOpen(false)}>Price: Low to High</li>
                <li onClick={() => setIsSortOpen(false)}>Price: High to Low</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Filter Menu */}
      {isFilterOpen && (
        <div className="filter-menu">
          <img
            src={CancelIcon}
            alt="Close"
            className="close-icon"
            onClick={toggleFilterMenu}
          />
          <h3>FILTERS</h3>
          <ul>
            <li>Category</li>
            <li>Style</li>
            <li>Color</li>
            <li>Occasion</li>
            <li>Price</li>
          </ul>
          <button onClick={toggleFilterMenu} className="results-button">See Results</button>
          <button onClick={toggleFilterMenu} className="clear-filters-button">Clear Filters</button>
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="placeholder-image"></div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <p className="products-count">
          Showing {(currentPage - 1) * productsPerPage + 1}-{Math.min(currentPage * productsPerPage, totalProducts)} of {totalProducts} products
        </p>

        {currentPage * productsPerPage < totalProducts && (
          <button className="view-more-button" onClick={handleViewMore}>
            VIEW MORE
          </button>
        )}

        <div className="page-breadcrumb">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`page-number ${index + 1 === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>


    </div>
  );
}

export default ProductGrid;
