// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Задача

const sortByDescendingFriendCount = (users) => {};

// Решение

const sortByDescendingFriendCount = (users) =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);
