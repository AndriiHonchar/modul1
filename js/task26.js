function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}