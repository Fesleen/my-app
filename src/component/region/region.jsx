import React from 'react';
import styles from "./style.module.css"

// RegionSelect komponenti
const RegionSelect = ({ value, onChange, currentLang }) => {
  // Mintaqalar ro'yxati
  const regions = {
    uz: [
      'Toshkent viloyati', 
      'Toshkent shahri', 
      'Samarqand viloyati', 
      'Buxoro viloyati', 
      'Andijon viloyati', 
      'Farg\'ona viloyati', 
      'Namangan viloyati', 
      'Qashqadaryo viloyati', 
      'Surxondaryo viloyati', 
      'Jizzax viloyati', 
      'Sirdaryo viloyati', 
      'Xorazm viloyati', 
      'Navoiy viloyati', 
      'Qoraqalpog\'iston Respublikasi'
    ],
    ru: [
      'Ташкентская область', 
      'Ташкент', 
      'Самаркандская область', 
      'Бухарская область', 
      'Андижанская область', 
      'Ферганская область', 
      'Наманганская область', 
      'Кашкадарьинская область', 
      'Сурхандарьинская область', 
      'Джизакская область', 
      'Сырдарьинская область', 
      'Хорезмская область', 
      'Навоийская область', 
      'Республика Каракалпакстан'
    ],
  };

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
    >
      <option value="" disabled hidden>Mintaqani tanlang</option> {/* Placeholder sifatida ko'rsatmaslik */}
      {regions[currentLang].map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelect;