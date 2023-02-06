// Завдання 47/48
// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// Оголошена змінна getSortedFriends
// Змінній getSortedFriends присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Задача

const getSortedFriends = (users) => {};

// Решение

const getSortedFriends = (users) => {
  return users
    .reduce((allFriends, user) => {
      allFriends.push(...user.friends);
      return allFriends;
    }, [])
    .filter((friend, index, arr) => arr.indexOf(friend) === index)
    .sort();
};
