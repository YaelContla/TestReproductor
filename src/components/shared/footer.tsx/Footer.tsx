import React from "react";
import styles from "./styles.module.css";
import LogoSochi from "../../../assets/logo-sochi-color.png";
import ClaroSport from "../../../assets/logo-claro-sports.png";
import MobliIcon from "../../../assets/mobli-icon.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <p className={styles.aviso}>Aviso de privacidad/Contacto</p>
        <img src={LogoSochi} alt="Logo-soshi" className={styles.imagen} />

        <div className={styles.mobli}>
          <img
            src={MobliIcon}
            alt="Logo-Mobli"
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src={MobliIcon}
            alt="Logo-Mobli"
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src={MobliIcon}
            alt="Logo-Mobli"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
