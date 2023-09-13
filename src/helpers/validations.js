// validation.js
export function validateName(name) {
    const trimmedName = name.trim();
    return trimmedName.length >= 3 && trimmedName.length <= 20;
  }
  
  export function validateEmail(email) {
    // Utilizamos una expresión regular para verificar el formato del correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  export function validateMessage(message) {
    const trimmedMessage = message.trim();
    return trimmedMessage.length >= 20 && trimmedMessage.length <= 150;
  }
  