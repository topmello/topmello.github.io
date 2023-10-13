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
            padding: "80px 20px",
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
          <h3><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="#3ddc84" viewBox="0 0 576 512"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/></svg> Using Android?</h3>
          <h4 style={{color: "#555"}}>Production Build</h4>
          <Link
              style={{
                width: "300px",
                marginBottom: "20px",
              }}
              className={`button button--primary button--lg button--block`}
              to="https://github.com/topmello/settle-aid-assets/releases/download/v0.3.0/settle-aid-iteration-3.apk"
            >
              Download Settle Aid APK
            </Link>
          <h4>
            Or Scan the Iteration 3 QR code on{" "}
            <a href="https://topmello.github.io">Top Mello Product Doc</a> to
            download the APK build
          </h4>
          <br />
          <h3><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="#666666" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg> Using iOS? (also works for Android)</h3>
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
