import React from 'react';
import { Clock } from 'lucide-react';
import LanguageSwitch from '../translate/translate';
import styles from './style.module.css'; // CSS modulini import qilish

const Navbar = ({ currentLang, onLanguageChange }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTitle}>
        <Clock className="w-6 h-6" />
        <span className="text-xl font-semibold">Qatnov.uz</span>
      </div>
      <LanguageSwitch currentLang={currentLang} onLanguageChange={onLanguageChange} />
    </nav>
  );
};

export default Navbar;