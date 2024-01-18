import React from "react";
import styles from "./styles.module.css";
import LogoSochi from "../../../assets/logo-sochi-color.png";
import ClaroSport from "../../../assets/logo-claro-sports.png";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
          <img src={LogoSochi} alt="Logo-Sochi" />
          <img src={ClaroSport} alt="Logo-Claro-Sport" />
      </div>
    </>
  );
};

export default Header;
