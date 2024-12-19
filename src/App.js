import React, { useState, useEffect } from 'react';
import Navbar from './component/navbar/navbar';
import { RideForm } from './component/form/form';
import { translations } from './traslation';
import { fetchDrivers } from './api/drivers';
import { createReklama } from './api/reklama';
import './App.css'; // CSS faylini import qilish

function App() {
  const [lang, setLang] = useState('uz');
  const t = translations[lang] || translations['uz'];
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    telegram_id: '',
    username: '', 
    phone_number: '', 
    fio: '', 
    car_model: '', 
    car_number: '', 
    is_active: true, 
    created_at: new Date().toISOString(), // Yangi maydon
    odamOrPochta: 'person',
    from_location: '',
    to_location: '',
    passenger_count: 1
  });
  const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    const loadDrivers = async () => {
      try {
        const driversData = await fetchDrivers();
        setDrivers(driversData);
      } catch (err) {
        setError('Haydovchilarni yuklashda xato yuz berdi.');
      }
    };
    loadDrivers();
  }, []);

  const handleFormChange = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Yuborilayotgan ma\'lumotlar:', formData); // Yuborilayotgan ma'lumotlarni konsolga chiqarish
    try {
      const success = await createReklama(formData);
      if (success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setFormData({
          telegram_id: '',
          username: '',
          phone_number: '',
          fio: '',
          car_model: '',
          car_number: '',
          is_active: true,
          created_at: new Date().toISOString(),
          odamOrPochta: 'person',
          from_location: '',
          to_location: '',
          passenger_count: 1
        });
      }
    } catch (err) {
      setError('Reklama yaratishda xato yuz berdi.');
    }
  };

  return (
    <div className="container">
      <Navbar currentLang={lang} onLanguageChange={setLang} />
      <div className="card">
        <h1 className="title">{t.title}</h1>

        <RideForm
          formData={formData}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit} // To'g'ri joylashtirish
          drivers={drivers} // Alohida prop sifatida berish
          currentLang={lang}
        />

        {showSuccess && (
          <div className="successMessage">
            {t.success}
          </div>
        )}

        {error && (
          <div className="errorMessage">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;