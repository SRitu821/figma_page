import styles from "./navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_items}>Home</div>
      <div className={styles.nav_items}>About us</div>
      <div className={styles.nav_items}>Contact us</div>
    </div>
  );
};

export default Navbar;
