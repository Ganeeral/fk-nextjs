import React from 'react';
import styles from './Online.module.scss';
import Image from 'next/image';

export const Online = () => {
  return (
    <a href='#' target='_blank' className={styles.online}>
      <span className={styles.text}>ON-LINE</span>
      <span className={styles.description}>онлайн-консультация</span>
    </a>
  );
};
