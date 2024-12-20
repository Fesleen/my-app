import React, { useState } from 'react';
import styles from './style.module.css'; 

// PassengerCount komponenti
const PassengerCount = ({ value, onChange, label }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          className={styles.button}
        >
          -
        </button>
        <span className={styles.span}>{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className={styles.button}
        >
          +
        </button>
      </div>
    </div>
  );
};

// PassengerCount komponenti
const PassengerCountContainer = () => { // Nomini o'zgartirdik
  const [passengerCount, setPassengerCount] = useState(1); // Boshlang'ich qiymat

  return (
    <div>
      <h1>Yo'lovchilar soni</h1>
      <PassengerCount
        label="Yo'lovchilar soni:"
        value={passengerCount}
        onChange={setPassengerCount}
      />
    </div>
  );
};

export default PassengerCount; // PassengerCount komponentini eksport qilamiz