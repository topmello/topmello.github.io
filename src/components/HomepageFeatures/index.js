import React from "react";
import styles from "./styles.module.css";


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p>Iteration 1 APK Build</p>
        <img src="/img/qr_it_1.svg" style={{ width: '80%' }} />
      </div>
      <div className="container">
        <p>Iteration 2 APK Build</p>
        <img src="/img/qr_it_2.png" style={{ width: '80%' }} />
      </div>
      <div className="container">
        <p>Iteration 3 APK Build</p>
        <img src="/img/settle-aid-icon.png" style={{ width: '80%' }} />
      </div>
    </section>
  );
}
