import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const handleButtonClick = async () => {
    const url = "https://api.settle-aid.tech/";
    const credentials = {
      username: "topmello",
      password: "da7da0df508738e37f18",
    };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Basic " + btoa(credentials.username + ":" + credentials.password),
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    }
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.button_width}`}
            to="/DownloadPage"
          >
            Start Planning
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.button_width}`}
            to="/blog"
          >
            Product Blog
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.button_width}`}
            to="/docs/intro"
          >
            Developers Documentation
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Settle Aid"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
