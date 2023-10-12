
import React from 'react';
import QRCode from "react-qr-code";

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
    padding: '20px',
    width: '100%',
    backgroundSize: 'cover',
    borderRadius: '10px',
    marginTop: '20px'
  };

  const qrStyle = {
    marginTop: '20px',
  };

  const logoStyle = {
    width: '100px',
    marginBottom: '20px'
  };

  // Component
  return (
    <div style={containerStyle}>
      <img src="/img/settle-aid-icon.png" alt="Settle Aid Logo" style={logoStyle} />
      <h1 style={titleStyle}>Settle Aid</h1>
      <div style={contentStyle}>
        <p>
          🌟 Discover 🌟<br /><br />
          Settle Aid is the essential travel companion. It counters loneliness and offers joy in a new city. Tailored experiences and cultural tips help them adapt seamlessly. With an intuitive map for easy navigation, they can save and share routes. And with real-time tracking, safety is ensured. Unlike other apps, we offer a holistic solution blending comfort, education, and security. Because grandparents deserve a vibrant life in every new city.
          <br /><br />
          🔍 Navigate, explore, and embrace Melbourne with confidence and joy!
        </p>
      </div>
      <div style={qrContainerStyle}>
        <h2 style={titleStyle}>Download Now</h2>
        <div style={qrStyle}>
          <QRCode value="https://github.com/topmello/settle-aid-assets/raw/main/settle-aid-iteration-3.apk" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
