export const createReklama = async (formData) => {
  try {
    const response = await fetch('https://buxoroapiback.pythonanywhere.com/api/create_reklama/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return true; // Muvaffaqiyatli yuborilganini qaytarish
  } catch (error) {
    console.error('Error creating reklama:', error);
    return false; // Xato bo'lsa, false qaytarish
  }
};