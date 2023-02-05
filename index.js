// Завдання 31/48
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//Задача

// Change code below this line
const isEveryUserActive = (users) => {};
// Change code above this line

//Решение

// Change code below this line
const isEveryUserActive = (users) => users.every((user) => user.isActive);
// Change code above this line
