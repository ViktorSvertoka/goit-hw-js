// Завдання 14/20
// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder

// Властивість value в класі StringBuilder оголошена приватною

// В класі StringBuilder оголошений метод getValue

// В класі StringBuilder оголошений метод padEnd

// В класі StringBuilder оголошений метод padStart

// В класі StringBuilder оголошений метод padBoth

// В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

// Об'єкт builder не містить властивості value

// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .

// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.

// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^

// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// Задача

class StringBuilder {
  // Change code below this line

  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// Решение

class StringBuilder {
  // Change code below this line
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
