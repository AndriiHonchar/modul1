function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 const messageNew = message.toLowerCase();
 if (messageNew.includes('spam') || messageNew.includes('sale')) {
 result = true;
 } else {
 result = false;
 }
  // Пиши код выше этой строки
  return result;
}