import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>© 2022 UPM. All Rights reserved</div>
    </div>
  );
};

export default Footer;
