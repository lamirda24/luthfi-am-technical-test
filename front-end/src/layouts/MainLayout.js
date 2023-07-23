import React from 'react';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layouts}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
