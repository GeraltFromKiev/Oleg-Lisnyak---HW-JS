/*jshint esversion: 6 */
// Tasks go from easier to more difficult (at least I tried to order them like this). Do at least 6 tasks.

// Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
function convert(amount) {
  return amount * 8 + " грн.";
}
convert(5); // 40грн.

// function which returns reversed string.
function reverse(str) {
  let splitString = str.split(""); //создали массив и разбили строку  ["a", "b", "c"]
  let reverseArray = splitString.reverse(); // поменяли местами єлементы массива ["c", "b", "a"]
  var joinArray = reverseArray.join(""); // соединили элементы массива в строку ["cda"]
  return joinArray; // вернули реверсивную строку ("cba") в функцию
}
reverse('abc'); // 'cba'


// function which prints the stair picture of size n

function printStairs(n) {
    var space, hash, stair;
    for (var i = 0; i < n; i++){
        space = n - 1 - i; // считает кол-во пробело
        hash = i + 1; // считаем кол-во звёзд
        stair = '#'.repeat(hash) + ' '.repeat(space); // добавляем/заменяем повторения согласно
        //кол-ву которые посчитали на каждом шагу hash & space.
        console.log(stair);
    }
}
printStairs(3);

// function which returns total sum of a range

function sumRange(start, end) {
  /* your code */ }
sumRange(2, 4) // 9
sumRange(-1, 3) // 5

//Write a function which returns the smallest of three numbers.
function min(a, b, c) {
 if ( a > b === c) { //  если true выводем b, если false выводим a;
   console.log(b);
 } else {
      console.log(a);
 }
}
min(10, 5, 11); // 5
min(3, 8, 4); // 3

// function which prints the pyramid picture of size n
function printPyramid(n) {
//Not done yet...
//   function printStairs(n) {
//     var space, hash, stair, space2;
//     for (var i = 0; i < n; i++){
//         space = n - 1 - i; // считает кол-во пробело
//         space2 = space + 1;
//         hash = i + 1; // считаем кол-во звёзд
//         stair = ' '.repeat(space2) + '#'.repeat(hash) + ' '.repeat(space); // добавляем/заменяем повторения согласно
//         //кол-ву которые посчитали на каждом шагу hash & space.
//         console.log(stair);
//     }
// }
// printStairs(3);
}
printStairs(3)

// function which transforms first and last letter to uppercase(use built in string’ s method).
function firstAndLastToUpper(str) {
  /* your code */ }
firstAndLastToUpper('abc') // 'AbC'

// function which returns true
// if string contains ironman or cursor or ostap otherwise returns false.The
// function must be
// case -insensitive.
function cursorCheck(str) {
  /* your code */ }
cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false

// function which returns a string with all letters in uppercase(without built in string’ s method).
// The function supports only english alphabet.

function toUppercase(str) {
  /* your code */ }
toUppercase('abc') // 'ABC'

// function which removes duplication of letters in string.The
// function must be
// case -insensitive.

function removeDuplicationLetters(str) {
  /* your code */ }
removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '

// function that when given a number n returns the n - th number in the Fibonacci Sequence.The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…

function fibonacci(n) {
  /* your code */ }
fibonacci(3) // 2
fibonacci(5) // 5
fibonacci(7) // 13
