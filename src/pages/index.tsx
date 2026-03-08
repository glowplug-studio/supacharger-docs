import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { handleScroll, setupScrollListener } from "@site/src/utils/scrollLogic";
import { initStripeGradient } from "@site/src/utils/stripeGradient";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { JSX, useEffect, useState } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm install -g @glowplug/supacharger-cli");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <canvas
        id="gradient-canvas"
        className={styles.gradientCanvas}
        data-js-darken-top
        data-transition-in
        aria-hidden="true"
      />
      <div className={styles.gradientOverlay} aria-hidden="true" />
      <div className={styles.gridlinesBackground} aria-hidden="true" />
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroLeft}>
          <div className={styles.largeBackgroundText}>Supacharger</div>
          <h1 className={styles.heroTitle}>
            AI ready foundation kit for agent mode SaaS web app development.
          </h1>
          <p className={styles.heroSubtitle}>
            Save tokens and start with a familiar baseline when spinning up new vibe coded SaaS projects.
          </p>

          <div className={styles.logos}>
            <img src="img/logos/stripe-icon.png" alt="Stripe" />
            <img src="img/logos/supabase-icon.png" alt="Supabase" />
            <img src="img/logos/vercel-icon.png" alt="Vercel" />
            <img src="img/logos/nextjs-icon.png" alt="Next.js" />
            <img src="img/logos/brevo-icon.png" alt="Brevo" />
            <img src="img/logos/tailwind-iocn.png" alt="Tailwind" />
          </div>

          <div className={styles.heroBottomGroup}>
            <p className={styles.heroBottomText}>
              Build and iterate fast with the best standard technologies, Stripe, Next.js & Supabase.
            </p>
            <p className={styles.reimaginedText}>Reimagined with</p>
            <a
              href="https://specdrive.dev"
              target="_blank"
              rel="noreferrer"
              className={styles.specdriveLink}
            >
              <div className={styles.heroBottomLogos}>
                <img
                  src="https://specdrive.dev/logoicon.svg"
                  className={styles.logoIconImage}
                  alt="SpecDrive logo icon"
                />
                <img
                  src="https://specdrive.dev/logowording.svg"
                  className={styles.logoWordingImage}
                  alt="SpecDrive logo wording"
                />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.imageContainer}>
            <img
              src="img/graphics/hero-charger.png"
              className={styles.chargerImage}
              alt="Supacharger"
            />
            <div className={styles.deskScene}>
              <img
                src="img/graphics/erika-laptop.png"
                className={styles.erikaImage}
                alt="Erika"
              />
              <div className={styles.quoteWrapper}>
                <img src="img/graphics/quote-bg.svg" className={styles.quoteBg} alt="" />
                <div className={styles.quoteText}>
                  <span>npm install -g @glowplug/supacharger-cli</span>
                  <div className={styles.copyContainer}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={styles.copyIcon} 
                      onClick={copyCommand}
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    <span className={clsx(styles.copiedTooltip, copied && styles.copiedVisible)}>
                      Copied!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroFadeOut} aria-hidden="true" />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const cleanupScroll = setupScrollListener();
    const cleanupGradient = initStripeGradient("#gradient-canvas");
    handleScroll();

    return () => {
      cleanupScroll();
      cleanupGradient();
    };
  }, []);

  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
