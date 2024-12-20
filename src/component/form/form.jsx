// RideForm.js
import React from 'react';
import PassengerCount from '../passangerCount/passanger'; // To'g'ri nom bilan import qiling
import RegionSelect from '../region/region';
import styles from './style.module.css';
import { translations } from '../../traslation'; 

export function RideForm({ 
  formData, 
  onFormChange, 
  onSubmit, 
  drivers, 
  currentLang 
}) {
  const defaultFormData = {
    odamOrPochta: 'person',
    from_location: '',
    to_location: '',
    passenger_count: 1,
    telegram_id: ''
  };

  const currentTranslations = translations[currentLang] || translations.uz; // O'zbek tilini default qilib olish

  const currentFormData = formData || defaultFormData;

  return (
    <form onSubmit={onSubmit} className={styles.rideForm}>
      <div className={styles.radioGroup}>
        <label className={styles.label}>
          <input
            type="radio"
            name="type"
            value="person"
            checked={currentFormData.odamOrPochta === 'person'}
            onChange={e => onFormChange({ odamOrPochta: e.target.value })}
            className={styles.radio}
          />
          {currentTranslations.passengerType.person}
        </label>
        <label className={styles.label}>
          <input
            type="radio"
            name="type"
            value="cargo"
            checked={currentFormData.odamOrPochta === 'cargo'}
            onChange={e => onFormChange({ odamOrPochta: e.target.value })}
            className={styles.radio}
          />
          {currentTranslations.passengerType.cargo}
        </label>
      </div>

      <RegionSelect
      className={styles.select}
        value={currentFormData.from_location}
        onChange={(value) => onFormChange({ from_location: value })}
        placeholder={currentTranslations.from}
        currentLang={currentLang}
      />

      <RegionSelect
        value={currentFormData.to_location}
        onChange={(value) => onFormChange({ to_location: value })}
        placeholder={currentTranslations.to}
        currentLang={currentLang}
      />

      <PassengerCount
        value={currentFormData.passenger_count}
        onChange={value => onFormChange({ passenger_count: value })}
        label={ currentTranslations.passengerCount}
      />

      <select
        value={currentFormData.telegram_id}
        onChange={e => onFormChange({ telegram_id: e.target.value })}
        className={styles.select}
      >
        <option value="">{currentTranslations.selectDriver}</option>
        {drivers && drivers.map(driver => (
          <option key={driver.telegram_id} value={driver.telegram_id}>
            {driver.fio}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={!currentFormData.from_location || !currentFormData.to_location || !currentFormData.telegram_id} // Yuborish tugmasini faollashtirish
      >
        {currentTranslations.submit}
      </button>
    </form>
  );
}