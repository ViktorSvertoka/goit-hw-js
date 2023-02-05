// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//Задача

const getActiveUsers = (users) => {};

//Решение

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};
