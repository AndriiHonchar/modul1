function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (available>=ordered) {
message = 'Заказ оформлен, с вами свяжется менеджер';
} else {
message = 'На складе недостаточно товаров!';
}
  // Пиши код выше этой строки
  return message;
}