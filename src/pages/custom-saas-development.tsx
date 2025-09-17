import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { handleScroll, setupScrollListener } from "@site/src/utils/scrollLogic";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { JSX, useEffect } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.title} is {siteConfig.tagline}
        </p>
        <img src="img/supaimg-min.png" className="supaimag-min" />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/"
          >
            Get started
          </Link>
        </div>
      </div>

      <svg
        className="supaimg-vapour"
        width="2018"
        height="958"
        viewBox="0 0 2018 958"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="32"
          transform="matrix(-1 0 0 1 64 60.7017)"
          fill="white"
        />
        <circle
          cx="8"
          cy="8"
          r="8"
          transform="matrix(-1 0 0 1 23 87.7017)"
          fill="#417C4C"
        />
        <path
          d="M536.717 34.2017C203.387 34.2017 85.8296 -116.978 2.49951 216.353C2.49979 197.202 268 248.702 2.49951 216.353C80.4997 235.854 401.5 574.489 542.717 682.202C726 822 1038.9 957.202 1348.72 957.202C1682.05 957.202 1934.38 724.532 2017.71 391.202C1892.71 557.872 1731.38 586.872 1564.71 545.202C1469.63 521.432 1376.95 413.559 1301.72 337.202C1179.16 212.797 846.532 34.2017 536.717 34.2017Z"
          fill="url(#paint0_linear_1740_1065)"
        />
        <circle cx="190.5" cy="142.202" r="22.5" fill="white" />
        <circle cx="202.5" cy="144.202" r="5.5" fill="#417C4C" />
        <defs>
          <linearGradient
            id="paint0_linear_1740_1065"
            x1="1015.72"
            y1="101.051"
            x2="1497.72"
            y2="978.551"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#407B4C" />
            <stop offset="1" stop-color="#173620" />
          </linearGradient>
        </defs>
      </svg>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Setup scroll listener and call handleScroll
    const cleanup = setupScrollListener();
    handleScroll();

    // Clean up the scroll event listener on component unmount
    return cleanup;
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="${siteConfig.tagline}"
    >


      <main>
      <h1>Custom saas dev</h1>
      
      </main>
    </Layout>
  );
}
