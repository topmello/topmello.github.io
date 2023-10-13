import React from "react";
import QRCode from "react-qr-code";
import styles from "./styles.module.css";


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.buildContainer}>
        <p>Iteration 1 APK Build</p>
        <QRCode value="https://github.com/topmello/settle-aid-assets/releases/download/v0.1.0/settle-aid-iteration-1.apk" style={{ width: '80%' }} />
      </div>
      <div className={styles.buildContainer}>
        <p>Iteration 2 APK Build</p>
        <QRCode value="https://github.com/topmello/settle-aid-assets/releases/download/v0.2.0/settle-aid-iteration-2.apk" style={{ width: '80%' }} />
      </div>
      <div className={styles.buildContainer}>
        <p>Iteration 3 APK Build</p>
        <QRCode value="https://github.com/topmello/settle-aid-assets/releases/download/v0.3.0/settle-aid-iteration-3.apk" style={{ width: '80%' }} />
      </div>
    </section>
  );
}
