import React, { useState } from "react";
// import { useValue } from "../../fContext";
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faBell,faUser } from "@fortawesome/free-solid-svg-icons";


    export default function Nav() {
        return (
          <div className={styles.Nav}>
            <div className={styles.header}>
              <div className={styles.title}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajYhzruI4cXjf90cfgsMqvy71aSx2LBDNtaTobEUtnA&s" />
                <p>IntraBusyBuy</p>
              </div>
              <div className={styles.searchCartProfile}>
                <div className={styles.searchDiv}>
                  <form className={styles.searchForm}>
                    <input
                      type="text"
                      className={styles.searchInput}
                      placeholder="Search with name"
                    />
                    <button className={styles.searchButton}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> {/* Use FontAwesomeIcon here */}
                    </button>
                  </form>
                </div>
                <div className={styles.notification}>
                <FontAwesomeIcon icon={faBell} />
                </div>
                <div className={styles.profile}>
                <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        );
      }
      

