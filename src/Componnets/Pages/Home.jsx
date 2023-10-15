







import React, { useState } from "react";
import { useValue } from "../../fContext";
import styles from "./Home.module.css";

export default function Home() {
  const {items,handleCartInc } = useValue();
  const productsPerPage = 8; // Adjust the number of products per page as needed
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(items.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.productsContainer}>
      {currentProducts.map((product, i) => {
        return (
          <div key={i} className={styles.productContainer}>
            <div className={styles.imgContainer}>
              <img src={product.url} alt={product.title} />
            </div>
            <div className={styles.titleContainers}>
              {product.title}
            </div>
            <div className={styles.dAndC}>
              <div className={styles.genAndPrice}>
                <div className={styles.gen}>for {product.segment}</div>
                <div className={styles.price}>&#8377; {product.price}</div>
              </div>
              <div className={styles.cart}>
                <img
                  className={styles.cartImg}
                  src="https://png.pngtree.com/element_our/png/20181031/shopping-cart-png_224349.jpg"
                  alt="cart"
                  onClick={() => handleCartInc(product.id)}
                />
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.paginationContainer}>
        <button
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          disabled={currentPage === 1}
          className={styles.pages}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={i + 1 === currentPage ? styles.currentPageButton : styles.pageButton}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => {
            if (currentPage < totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
          disabled={currentPage === totalPages}
          className={styles.pages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

