import React from 'react';
import styles from './style.module.css'; // CSS modulini import qilish

const LanguageSwitch = ({ currentLang, onLanguageChange }) => {
  return (
    <div className={styles.languageSwitch}>
      <button 
        onClick={() => onLanguageChange('uz')} 
        className={`${styles.button} ${ currentLang === 'uz' ? styles.active : ''}`}
      >
        UZ
      </button>
      <button 
        onClick={() => onLanguageChange('ru')} 
        className={`${styles.button} ${currentLang === 'ru' ? styles.active : ''}`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitch;