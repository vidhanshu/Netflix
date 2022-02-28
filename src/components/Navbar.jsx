import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Netflix-Logo-PNG-Transparent-Image.png";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
function Navbar({ searchHandler }) {
  const [search, setSearch] = useState(false);
  const navbar = useRef();
  const searchKeywordSetter = (evt) => {
    searchHandler(evt.target.value.toLowerCase());
  };
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 30) {
        navbar.current.style.padding = "10px 20px";
        navbar.current.style.background = "var(--bgcolor)";
      } else {
        navbar.current.style.padding = "20px 20px";
        navbar.current.style.background = " rgba(90, 90, 90, 0.459)";
      }
    };
  }, []);
  return (
    <nav ref={navbar} className={styles.navbar_container}>
      <div className={styles.sub_container}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className={styles.search}>
          {search ? (
            <div className={styles.input_container}>
              <input
                className={styles.search_bar}
                onChange={searchKeywordSetter}
                type="text"
                placeholder="search"
              />
              <i
                className="fas fa-times"
                onClick={() => {
                  setSearch((prev) => !prev);
                }}
              ></i>
            </div>
          ) : (
            <i
              className="fas fa-search"
              onClick={() => {
                setSearch((prev) => !prev);
              }}
            ></i>
          )}
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
