export const fetchDrivers = async () => {
  try {
    const response = await fetch('https://buxoroapiback.pythonanywhere.com/api/drivers/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Haydovchilar ro'yxatini qaytarish
  } catch (error) {
    console.error('Error fetching drivers:', error);
    return []; // Xato bo'lsa, bo'sh ro'yxat qaytarish
  }
};