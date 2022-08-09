import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function TextBlock({children}) {
  return (
    <section className={styles.features}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
