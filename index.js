// Завдання 22/48
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//Задача

// Change code below this line
const getUsersWithEyeColor = (users, color) => {};
// Change code above this line

// Решение

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);
