const cities = [
  "Калининград",
  "Санкт - Петербург",
  "Москва",
  "Сочи",
  "Екатеринбург",
];
let list = document.getElementById("myList");
const temps = []; //массив для введенных значений температуры городов
let i = 0;
while (i < cities.length) {
  const temp = +prompt(`Введите температуру для города: ${cities[i]}`, ""); //просим ввести значение и добавляем в промежуточную переменную
  let li = document.createElement("li");
  li.innerText = `Температура для города ${cities[i]} — ${temp}`;
  list.appendChild(li);
  temps.push(temp); //добавляем значение температуры в массив temps
  i++;
}
console.log(temps); //проверка, что это все-таки массив и он заполнился правильными данными
const maxValue = Math.max.apply(null, temps); //ищем максимальное значение
const minValue = Math.min.apply(null, temps); //ищем минимальное значение
let li = document.createElement("li");
li.innerText = "Максимальная температура: " + maxValue;
list.appendChild(li);
let sli = document.createElement("li");
sli.innerText = "Минимальная температура:" + minValue;
list.appendChild(sli);
