/*//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
  console.log(`Числа от 1 до 10:`, i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`Чётные числа от 1 до 20:`, i);
  }
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; i--) {
  console.log(`Числа от 10 до 1 в обратном порядке:`, i);
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
let i = 0;
while (i < 10) {
  i++;
  console.log(`Таблица умножение на 5:`, i * 5);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  console.log(`Cуммa чисел от 1 до 100:`, sum);
}

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 1) {
  console.log(`все элементы массива:`, array[i]);
}
//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sumNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
  sumNumbers += numbers[i];
  console.log(`Cуммa всех элементов массива:`, sumNumbers);
}

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++)
  animals[i] += " - это прекрасное животное ";
console.log(animals);
//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";

for (let symbol of str) {
  console.log(symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let number of array) {
  console.log(`все элементы массива:`, number);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];
for (let sentence of sentences) {
  console.log(`все элементы массива:`, sentence.split(" "));
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sumNum = 0;
for (let item of numbers) {
  sumNum += item;
}
console.log(`Cуммa всех элементов массива:`, sumNum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (let item of list) {
  console.log(`Длина каждого слова:`, item.length);
}

//Задание 14
const words = ["Hello", "world", "!"];
// Преобразуйте массив каждый элемент массива words в верхний регистр
for (let i = 0; i < words.length; i += 1) {
  const word = words[i];
  const normalizedWords = word.toUpperCase();
  words[i] = normalizedWords;
}
console.log(`Каждый элемент массива words в верхнем регистре:`, words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < greeting.length; i++) {
  if (vowels.includes(greeting[i].toLowerCase())) {
    vowelCount++;
  }
}
console.log(`Kоличество гласных букв в строке:`, vowelCount);
//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ["Hello", "world", "!"];
for (let word of words) {
  console.log(`массив в одну строку с пробелами:`, words.join(" "));
}
//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let count2 = 10;
while (count2 >= 1) {
  console.log(count2);
  count2--;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
while (i <= allNumbers.length) {
  if (allNumbers[i] < 0) {
    allPositive = false;
    break;
  }
}
if (allPositive) {
  console.log("Есть отрицательное число в массиве");
} else {
  console.log("Все числа в массиве положительные");
}

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let i = 0;
do {
  if (random[i] < 0) {
    break;
  } else
    console.log(
      `значения элементов массива до первого отрицательного числа:`,
      random[i]
    );
  i++;
} while (i < random.length);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let i = 1;
do {
  i++;
  if (i % 3 === 0) {
    continue;
  } else console.log(i);
} while (i <= 100);


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

let sum = 0;
let num = 0;
while (sum <= 100) {
  num = +prompt("Введите число", "");
  sum += num;
}
console.log(`Сумма введенных чисел больше 100 — ${sum}.`);


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function addBlueClass() {
  const back = document.querySelectorAll("h4");
  for (let ind in back) {
    console.log(
      "Запущена функция, которая меняет фоновый цвет всех элементов <h4> на странице на синий цвет"
    );
    back[ind].classList.add("addBlue");
  }
}
addBlueClass();
*/
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let rw = "";
while (rw.length < 6) {
  rw += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(rw);
