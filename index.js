// Завдання 7/20
// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// Задача

class Car {
  // Change code below this line
  // Change code above this line
}

// Решение

class Car {
  // Change code below this line
  constructor(brand, model, price) {
    // Ініціалізація властивостей екземпляра
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
