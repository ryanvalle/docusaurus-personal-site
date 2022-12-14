import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroText}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <video className={styles.heroVideo} autoPlay={true} loop={true} muted={true} poster="/videos/poster.png" playsInline={true} controls={false}>
          <source src="https://res.cloudinary.com/drvvky8r9/video/upload/v1660188675/emoji_fw6mvf.mov" type="video/quicktime"></source>
          <source src="https://res.cloudinary.com/drvvky8r9/video/upload/v1660188669/emoji_u7kcuu.webm" type="video/webm"></source>
        </video>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hello I'm Ryan, and this is my personal site.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
