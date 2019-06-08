/*jshint esversion: 6 */
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n.
// Сделайте три варианта решения:
// 1 С использованием цикла.
// 2 Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
// 3 С использованием формулы для суммы арифметической прогрессии.

// let allProduct = ["Огурець", "Помидор", "Капуста", "Морковь", "Апельсин", "Вишня", "Банан"];
// let vegetables = [];
// let fruits = [];
// vegetables = allProduct.slice(0,4);
// fruits = allProduct.slice(4);
// console.log(vegetables);
// console.log(allProduct);
// console.log(fruits);


// Array
// let bodyParts = ["глаза", "носов", "рта", "ушей"];
// let ajectives = ["некрасивое", "стремное", "уродское"];
// let animals = ["слона", "мухи", "шакала", "собаки", "кота"];
// let numbers = ["5", "4", "3"];
// let randomNumbers = numbers[Math.floor(Math.random()*numbers.length)];
// let randomFuck = bodyParts[Math.floor(Math.random()*bodyParts.length)];
// let randomFuck2 = ajectives[Math.floor(Math.random()*ajectives.length)];
// let randomAnimals = animals[Math.floor(Math.random()*animals.length)];
// let result = ["У тебя",randomNumbers, randomFuck, "еще более", randomFuck2,",чем",randomFuck,"у", randomAnimals + `!!!`].join(" ");
// console.log(result);
// let myRandom = ["У тебя",randomNumbers, randomFuck, "на голове!!"].join(" ");
// console.log(myRandom);

// Object
// let scores = {
//   Anna : 0,
//   Oleg : 0,
//   Oksana : 0,
// };
// scores.Anna = 2;
// console.log(scores.Anna);
// console.log(scores);

// let myCrazyObj = {
//   name: "Нелепый хуй",
//   "score array": [7,9, {
//           purpose: "путаница",
//           number: 123
//         }, 3.3],
//   "random animal":`Банановая акула`
// };
//
// console.log(myCrazyObj.number);
// function meeting() {
//   let name = prompt("Введите свое имя: ");
//   if (name === "Oleg"){
//     console.log("Привет, мне");
//   } if (name === "Sveta") {
//     console.log("Hello mom");
//   } if (name != "Oleg" && name != "Sveta") {
//     console.log("Привет незнакомец");
//   }
// }
// meeting();


// function pow(n, exp){
//   if(exp===0) return 1;
//   let result = n;
//   for (var i = 0; i < exp - 1; i++) {
//     result *=n;
//   }
//   return result;
// }
// console.log(pow(3,2));


const PRICE_PHONE = 99.99;
const ACCESSORY_PRICE = 7.98;
const TAX_RATE = 0.08;

let balanceBank = 876.57;
let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
} // налог

function formatAmount(amount) {
  return amount.Fixed(3) + "грн.";
} // переводим в нормальній формат

for (i = 0; amount < balanceBank; i++) {
  amount += PRICE_PHONE;
  if (amount < balanceBank) {
    amount += ACCESSORY_PRICE;
  }
  return amount;
}
amount = amount + calculateTax(amount);
console.log(
  "Ваша покупка: " + formatAmount(amount)
);

for (var i = 3; i < 10000; i = i* 3) {
  console.log(i);
}
// function pow(n, exp) {
//   let result = "";
//   while (exp > 0) {
//     result = n*n;
//     exp--;
//   }
//   return result;
// }
// console.log(pow(3, 2));
let animals =["Кот", "Собака", "Заець", "Волк"];

  for (var i = 0; i < animals.length; i++) {
    return animals[i] = (animals[i] + " -прекрасное животное");
}
console.log(animals);
