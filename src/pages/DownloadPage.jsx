import React from "react";
import QRCode from "react-qr-code";
import Link from "@docusaurus/Link";

function DownloadPage() {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontFamily: '"Arial", sans-serif',
    backgroundImage: 'url("/img/showcase-large.png")',
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  };

  const contentStyle = {
    display: "flex",
    color: "#001158",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    textAlign: "center",
    marginBottom: "30px",
    width: "100%",
  };

  const qrContainerStyle = {
    display: "flex",
    color: "#001158",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundSize: "cover",
    borderRadius: "10px",
  };

  const qrStyle = {
    marginTop: "20px",
  };

  const logoStyle = {
    width: "100px",
    marginBottom: "20px",
    borderRadius: "10px",
  };

  const buttons = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
  };

  // Component
  return (
    <div style={containerStyle}>
      <div
        style={
          {
            maxWidth: "800px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "rgba(255, 255, 255, 0.5)",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "40px",
          }
        }
      >
        <img
          src="/img/settle-aid-icon.png"
          alt="Settle Aid Logo"
          style={logoStyle}
        />
        <h1 style={titleStyle}>Settle Aid</h1>
        <div style={contentStyle}>
          <h2>Your Ultimate Travel Companion</h2>
          <p>
            Settle Aid is the ultimate travel companion for grandparents aged
            50-65 visiting Melbourne to care for their grandchildren. We
            understand the sacrifices they make for their families and the
            potential loneliness of being in a new city. Settle Aid offers a
            tailored travel experience, including educational tips,
            user-friendly navigation, experience sharing, and real-time safety
            tracking, all in one package, ensuring they enjoy their time in an
            unfamiliar city.
            <br />
            <br />
            🔍 Navigate, explore, and embrace Melbourne with confidence and joy!
          </p>
          <br />
          <h2>💙 How to try out our app?</h2>
          <br />
          <h3>💚 Using Android?</h3>
          <h4 style={{color: "#555"}}>Production Build</h4>
          <h4>
            Scan the Iteration 3 QR code on{" "}
            <a href="https://topmello.github.io">Top Mello Product Doc</a> to
            download the APK build
          </h4>
          <br />
          <h3>🩶 Using iOS? (also works for Android)</h3>
          <h4 style={{color: "#555"}}>Demo Environment (Share link function may not work)</h4>
          <h4>1. Install Expo Go Application</h4>
          <div style={buttons}>
            <Link
              className={`button button--primary button--lg button--block`}
              to="https://expo.io/client"
            >
              Expo Go
            </Link>
          </div>
        </div>
        <div style={qrContainerStyle}>
          <h4>2. Click the button or Scan the QR code to open the demo application</h4>
          <div style={buttons}>
            <Link
              className={`button button--primary button--lg button--block`}
              to="exp://34.129.60.35:8081"
            >
              Go to Settle Aid
            </Link>
          </div>

          <div style={qrStyle}>
            <QRCode value="exp://34.129.60.35:8081" style={{ width: "100%", borderRadius: "12px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
