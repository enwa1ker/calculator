# calculatorJS
# Калькулятор на JavaScript

Простой калькулятор на языке программирования JavaScript, который может выполнять основные математические операции.

## Использование

1. Склонируйте репозиторий:

    git clone https://github.com/enwa1ker/calculatorJS.git

2. Откройте файл `index.html` в вашем веб-браузере.

3. Введите числа и выберите операцию, затем нажмите кнопку "=" для получения результата.

## Пример

```javascript
// Создание экземпляра калькулятора
const calculator = new Calculator();

// Выполнение операций
calculator.add(5);
calculator.subtract(3);
calculator.multiply(2);
calculator.divide(4);

// Получение результата
const result = calculator.getResult();
console.log(result); // Выводит 2
