import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageHeader({header, subtext}) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroText}>
          <h1 className="hero__title">{header}</h1>
          <p className="hero__subtitle">{subtext}}</p>
        </div>
      </div>
    </header>
  );
}