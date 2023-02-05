// Завдання 29/48
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// Оголошена функція getUserWithEmail(users, email)

// Для перебирання параметра users використовується метод find()

// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony

// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head

// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson

// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined

// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//Задача

const getUserWithEmail = (users, email) => {};

//Решение

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
