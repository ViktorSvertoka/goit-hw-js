// Завдання 16/20
// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Оголошений клас Car
// Клас Car містить статичну властивість MAX_PRICE
// Значення статичної властивості MAX_PRICE - це число 50000
// Екземпляр не містить властивості MAX_PRICE
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price
// Виклик сетера price в екземпляра класу, зі значенням аргументу меншим за значення MAX_PRICE, змінює властивість #price
// Виклик сетера price в екземпляра класу, зі значенням аргументу більшим за значення MAX_PRICE, не змінює властивість #price

// Задача

class Car {
  // Change code below this line

  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// Решение

class Car {
  // Change code below this line

  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
