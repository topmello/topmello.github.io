
import React from 'react';
import QRCode from "react-qr-code";
import Link from "@docusaurus/Link";

function DownloadPage() {
  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    width: '100%',
    fontFamily: '"Arial", sans-serif',
    backgroundColor: '#ffe78f',
    minHeight: '100vh'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    textAlign: 'center',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '800px'
  };

  const qrContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundSize: 'cover',
    borderRadius: '10px',
    maxWidth: '800px'
  };

  const qrStyle = {
    marginTop: '20px',
  };

  const logoStyle = {
    width: '100px',
    marginBottom: '20px'
  };


  const buttons = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px'
  }

  // Component
  return (
    <div style={containerStyle}>
      <img src="/img/settle-aid-icon.png" alt="Settle Aid Logo" style={logoStyle} />
      <h1 style={titleStyle}>Settle Aid</h1>
      <div style={contentStyle}>
        <p>
          🌟 Your Ultimate Travel Companion 🌟<br /><br />
          Settle Aid is the ultimate travel companion for grandparents aged 50-65 visiting Melbourne to care for their grandchildren. We understand the sacrifices they make for their families and the potential loneliness of being in a new city. Settle Aid offers a tailored travel experience, including educational tips, user-friendly navigation, experience sharing, and real-time safety tracking, all in one package, ensuring they enjoy their time in an unfamiliar city.
          <br /><br />
          🔍 Navigate, explore, and embrace Melbourne with confidence and joy!
        </p>
        <h3>Please download Expo Go to access our aplication</h3>
        <div style={buttons}>
          <Link
            className={`button button--secondary button--lg button--block`}
            to="https://expo.io/client"
          >
            Expo Go
          </Link>
        </div>


      </div>
      <div style={qrContainerStyle}>
        <div style={buttons}>
          <Link
            className={`button button--secondary button--lg button--block`}
            to="exp://34.129.60.35:8081"
          >
            Start Planning
          </Link>
        </div>

        <div style={qrStyle}>
          <QRCode value="exp://34.129.60.35:8081" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
