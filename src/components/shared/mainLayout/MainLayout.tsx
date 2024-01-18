import React from "react";
import Header from "../header/Header";
import Footer from "../footer.tsx/Footer";
import styles from "./styles.module.css";
import Body from "../../body/body";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Body />

      <Footer />
    </>
  );
};

export default MainLayout;
