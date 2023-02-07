// Завдання 13/20
// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// Задача

class Storage {
  // Change code below this line
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Решение

class Storage {
  // Change code below this line
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
